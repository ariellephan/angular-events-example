import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./app.component.css"]
})
export class ChildComponent implements OnChanges {
  childClass = "";
  @Input() childMessage: string;
  
  checkClass(num) {
    return num == 2;
  }

  updateChildClass() {
    this.childClass = this.checkClass(2) ? "lockClass3" : "lockClass";
  }

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Change detected:', changes.childMessage);
    if (changes.childMessage.currentValue != "Change parent value!") {
      this.updateChildClass();
    }
  }
}
