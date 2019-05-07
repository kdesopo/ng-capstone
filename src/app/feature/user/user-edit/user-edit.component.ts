import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';
import { JsonResponse } from 'src/app/model/json-response.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title: string = 'User Edit';

  jr: JsonResponse;
  id: string;
  resp: any;

  user: User;

  constructor(private userSvc: UserService,
  private router: Router,
  private route: ActivatedRoute) { }
  
  ngOnInit() {
  	this.route.params.subscribe(params => this.id = params['id']);
    console.log("user edit ngOnInit", "id = "+this.id);
  	this.userSvc.get(this.id)
  		.subscribe(jrresp => {
        this.jr = jrresp;
        this.user = this.jr.data as User;
  		});
  }

  edit () {
    this.userSvc.edit(this.user)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/users/list']);
    });
  }
}
