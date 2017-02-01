import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class ColorsService {

  constructor(private http: Http) {}

  public getColors(): Observable<any> {
    return this.http.get("colors.json")
      .map((res:any) => res.json().colorsArray)
  }
}
