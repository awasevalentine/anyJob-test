import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanRequestService {

  //private _apiBaseUrl: string = 'http://localhost:3000/api/loans/requests';

  private _apiBaseUrl: string = 'https://ng-loan-app.herokuapp.com/api/loans/request';

  constructor(private _httpClient: HttpClient) {

  }

  saveLoanRequest(newRequest: any): Observable<any> {
    return this._httpClient.post(`${this._apiBaseUrl}/create`, newRequest);
  }

}
