import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repos } from './repoInterface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
private repourl ='http://augur.osshealth.io:5000/api/unstable/repos';

  getRepos(): Observable<any> {
    console.log("called getRepos"); 
    return this.http.get(this.repourl);
  }
  public getGroups(){
    console.log("called getGroups");
    return this.http.get('http://augur.osshealth.io:5000/api/unstable/repo-groups')
  }

  public getPullRequest(rgid, rpid) {
   return this.http.get("http://augur.osshealth.io:5000/api/unstable/repo-groups/" + rgid + "/repos/" + rpid + "/pull-request-acceptance-rate");
  }
  public getCommits(rgid, rpid) {
      return this.http.get("http://augur.osshealth.io:5000/api/unstable/repo-groups/" + rgid + "/repos/" + rpid + "/top-committers")
    } 
  public getContributors(rgid, rpid) {
        return this.http.get("http://augur.osshealth.io:5000/api/unstable/repo-groups/" + rgid + "/repos/" + rpid + "/contributors/")

  }
}

