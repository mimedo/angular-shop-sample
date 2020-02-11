import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  hide = true;
  hideConfirmation = true;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      gender: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      street: ["", [Validators.required]],
      streetNumber: ["", [Validators.required]],
      postZip: ["", [Validators.required]],
      place: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      emailConfirmation: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      passwordConfirmation: ["", [Validators.required]]
    });
  }

  onSubmit() {
    alert("Register form sent");
  }

  ngOnInit() {
  }

}
