import { Component, OnInit } from "@angular/core";
import { UserService } from "@services/user.service";
import { User } from "@models/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-user",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  submitted = false;
  hide = true;
  hideConfirmation = true;

  constructor(
      private userService: UserService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  newUser() {
    this.submitted = false;
    this.user = new User();
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
    this.save();
  }

  gotoList() {
    this.router.navigate(["/userList"]);
  }
}
