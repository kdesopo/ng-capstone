import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  title: string = "User Create";
  resp: any;
  user: User = new User();

  create() {
    this.userSvc.create(this.user)
    .subscribe(resp => {
      this.resp = resp;
      this.router.navigate(['/users/list']);
    });
  }
  constructor(private userSvc: UserService,
    private router: Router) { }

  ngOnInit() {
  }

}
