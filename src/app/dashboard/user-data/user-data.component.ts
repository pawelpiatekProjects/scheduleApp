import {Component, OnDestroy, OnInit} from '@angular/core';
import {User, UserService} from "../../services/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit, OnDestroy {

  user: User = null;
  userSubscription: Subscription = null;

  constructor(private userService: UserService) { }


  ngOnInit() {
    this.userSubscription = this.userService.getUserData().subscribe(user => {
      if(user !== null) {
        this.user = user;
        console.log('user in user data: ',this.user);
      }

    })
  }

  ngOnDestroy() {
    if(this.userSubscription !== null) {
      this.userSubscription.unsubscribe();
    }
  }

}
