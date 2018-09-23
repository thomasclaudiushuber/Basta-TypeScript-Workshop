import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }
 loadGithubRepos(githubUser: string) {
    return this.http.get(
      `https://api.github.com/users/${githubUser}/repos`)
      .pipe(map(res => res.json() as GithubRepo[]));
  }
}
export interface GithubRepo {
  name: string;
  language: string;
}

