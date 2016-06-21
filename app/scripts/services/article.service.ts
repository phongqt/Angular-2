import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Article } from '../class/article';
import { Observable } from 'rxjs/Observable';
import { PublishVar } from '../providers/config';

@Injectable()
export class ArticleService {
  constructor (private http: Http) {}
  private url = PublishVar.apiUrl + 'api/article/';
  getArticles (page, limit) {
    return this.http.get(this.url + '?page=' + page + '&limit=' + limit)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}