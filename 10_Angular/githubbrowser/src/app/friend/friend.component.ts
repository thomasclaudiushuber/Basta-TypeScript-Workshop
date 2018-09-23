import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Friend } from '../friends';
import { GithubRepo, GithubService } from '../github.service';


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit, OnChanges {
  @Input()
  friend: Friend;

  githubRepos: GithubRepo[];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.githubService.loadGithubRepos(this.friend.github)
    .subscribe(repos => this.githubRepos = repos);
  }

 

}
