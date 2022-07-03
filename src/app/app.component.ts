import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(MessagesComponent) child: MessagesComponent;
  title = 'Tour of Heroes';

  triggerChildClear() {
    this.child.clear();
  }
}
