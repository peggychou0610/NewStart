import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './shared-module/services/shared.service';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(MessagesComponent) child: MessagesComponent;
  title = 'Tour of Heroes';
  public heroCount: number;
  public subscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.subscription = this.sharedService.getMessage().subscribe(msg => {
      if (!isNaN(msg)) {
        this.heroCount = +msg;
      }
    });
  }

  triggerChildClear() {
    this.child.clear();
  }
}
