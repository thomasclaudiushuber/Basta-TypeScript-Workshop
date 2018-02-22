import { Component } from '@angular/core';
import { Friend, FRIENDLIST } from './friends';


@Component({
  selector: 'app-root',
  template: `<h1>Select a friend</h1>
    <ul>
      <li *ngFor="let friend of friends" style="cursor:pointer"
         [class.isSelected]="friend == selectedFriend"
          (click)="onFriendSelect(friend)">
            {{friend.name}}
      </li>
    </ul>
    <div *ngIf="selectedFriend != null">
      <app-friend [friend]="selectedFriend"></app-friend>
    </div>

`,
styles: [`.isSelected{font-weight:bold;}`]
})
export class AppComponent {
  friends: Friend[] = FRIENDLIST;

  selectedFriend: Friend;

  onFriendSelect(friend: Friend) {
    this.selectedFriend = friend;
  }
}
