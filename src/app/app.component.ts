import { Component, Input } from "@angular/core";
import { ChildComponent } from "./child.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  lockClass = "";
  @Input() parentMessage: string;

  checkClass(num) {
    return num == 2;
  }

  updateLockClass() {
    this.lockClass = this.checkClass(2) ? "lockClass2" : "lockClass";
  }

  constructor() {
    this.parentMessage = "Change parent value!";
  }
}
