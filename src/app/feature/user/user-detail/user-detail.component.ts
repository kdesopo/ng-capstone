import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user.class';
import { JsonResponse } from '../../../model/json-response.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  title: string = "User Detail";
  jr: JsonResponse;
  user: User;

  constructor(private userSvc: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getUserById(id);
      });
  }

  getUserById(id: string) {
    this.userSvc.get(id)
      .subscribe(jsresp => {
        this.jr = jsresp;
        this.user = this.jr.data as User;
      });
  }
  remove(): void {
    this.userSvc.delete(this.user.id)
      .subscribe(res => {
        this.router.navigateByUrl("/users/list");
      });
  }
}
