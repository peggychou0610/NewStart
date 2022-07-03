import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './shared-module/services/shared.service';
import { MessagesComponent } from './messages/messages.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild(MessagesComponent) child: MessagesComponent;
  title = 'Tour of Heroes';
  public heroCount: number;
  public subscription: Subscription;
  public jsonFromMock: any;
  objectKeys = Object.keys;

  constructor(private sharedService: SharedService, private http: HttpClient) {
    this.subscription = this.sharedService.getMessage().subscribe(msg => {
      if (!isNaN(msg)) {
        this.heroCount = +msg;
      }
    });
  }

  ngOnInit(): void {
    this.http.get('./assets/data/dashboard-link.json').subscribe(data => {
      this.jsonFromMock = data;
    });
  }

  triggerChildClear() {
    this.child.clear();
  }
}
