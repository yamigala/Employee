import { Injectable } from '@angular/core';

import { employee } from './emp.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmpService {
  public empUrl = "api/emp" // web-api for in-memory-data service
  public designation: string[];

  constructor(private http: HttpClient) {



  }
  /**
   * get method
   */
  public getData(): Observable<employee[]> {

    return this.http.get<employee[]>(this.empUrl);

  }
  /**
   * post method
   */
  public empdetails(data): Observable<employee> {
    return this.http.post<employee>(this.empUrl, data);
  }
}
