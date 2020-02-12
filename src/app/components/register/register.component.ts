import { Component, OnInit } from "@angular/core";
import { UserService } from "@services/user.service";
import { User } from "@models/user";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {MustMatch} from "../../helpers/MustMatch";

@Component({
  selector: "app-create-user",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: User = new User();
  submitted = false;
  hide = true;
  hideConfirmation = true;

  constructor(
      private formBuilder: FormBuilder,
      private userService: UserService,
      private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      gender: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]]
    }, {
      validator: MustMatch("password", "confirmPassword")
    });
  }

  save() {
    this.userService.createUser(this.user)
        .subscribe(
            data => console.log(data),
            error => console.log(error)
        );
    this.user = new User();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.save();
  }

  gotoList() {
    this.router.navigate(["/users"]);
  }

  get f() {
    return this.registerForm.controls;
  }
}
