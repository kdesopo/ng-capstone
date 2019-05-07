import { Component, OnInit } from '@angular/core';
import { Menu } from '../../model/menu.class';
import { SystemService } from 'src/app/service/system.service';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Menu[] = [
    new Menu("Home", "/home", "This is the home menu item"),
    new Menu("User", "/users/list", "This is the user menu item "),
    new Menu("Vendor", "/vendors/list", "This is the vendor menu item"),
    new Menu("Product", "/products/list", "This is the product menu item"),
    new Menu("Request", "/purchase-requests/list", "This is the pr menu item"),
    new Menu("Review", "/purchase-requests/review", "This is the pr review menu item"),
    new Menu("Login", "/users/login", "This is the login menu item"),
    new Menu("About", "/about", "This is the about menu item")
  ];

  user:User;

  constructor(private sysSvc:SystemService) { }

  ngOnInit() {
    if(this.sysSvc.data.user.loggedIn) {
      this.user = this.sysSvc.data.user.instance;
      if(this.user.reviewer === false && this.user.admin === false) {
        this.menuItems.splice(5,1);
      }
    }
  }
}
