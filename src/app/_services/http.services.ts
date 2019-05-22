import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class HttpCrudServices {
    constructor(private httpClient: HttpClient) { }
    // Get Method
    get = (baseUrl: string, endPoint: string): Observable<any> => this.httpClient.get(baseUrl + endPoint);
    getById = (baseUrl: string, endPoint: string, parameter: any): Observable<any> => {
        return this.httpClient.get(baseUrl + endPoint + `/${parameter}`);
    }
    // Post Method
    post = (baseUrl: string, endPoint: string, payLoad: any) => {
        return this.httpClient.post(baseUrl + endPoint, payLoad);
    }
    // Update
    upDate = (baseUrl: string, endPoint: string, payLoad: any) => {
        return this.httpClient.put(baseUrl + endPoint, payLoad);
    }
    // Delete
    delete = (baseUrl: string, endPoint: string, parameter: any) => {
        return this.httpClient.delete(baseUrl + endPoint + `${parameter}`);
    }
}
