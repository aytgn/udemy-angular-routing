import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router"
import { Subscription } from 'rxjs/Subscription';

import { User } from "./user.model"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) { }
  user: User = new User(0, "aytu");
  paramsSubscription: Subscription

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
    }
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params["id"],
          this.user.name = params["name"]
      }
    )
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
