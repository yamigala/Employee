import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
//---------------------------------------------------------//
import { employee } from "./emp.model";

@Injectable()
export class EmpService {
  public empUrl = "api/emp"; // web-api for in-memory-data service
  public designation: string[];

  constructor(private http: HttpClient) {}
  /**
   * to get data from service
   */
  public getData(): Observable<employee[]> {
    return this.http.get<employee[]>(this.empUrl);
  }
  /**
   * 
   * @param id :to get data of particular id
   */
  public getData1(id): Observable<employee> {
    return this.http.get<employee>(this.empUrl+"/"+id);
  }
  /**
   * to add data in database
   */
  public empdetails(data): Observable<employee> {
    return this.http.post<employee>(this.empUrl, data);
  }

  public delete(id: number): Observable<employee> {
    return this.http.delete<employee>(this.empUrl + "/" + id);
  }

  public edit(id: number): Observable<employee> {
    return this.http.get<employee>(this.empUrl + id);
  }
  public updateEmployee(id: number): Observable<employee> {
    return this.http.put<employee>(this.empUrl, id);
  }
}
