import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

interface Resource {
  url: string;
  params?: object;
  data?: object;
  headers?: object;
  form?: object;
  encode?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private url(resource: Resource): string {
    return `${environment.connectionProtocol}${environment.serverApiUrl}/${resource.url}`;
  }

  private headers(data: object): HttpHeaders {
    let headers = new HttpHeaders();
    if (data) {
      Object.keys(data)
        .forEach((key) => headers = headers.set(key, data[key]));
    }
    return headers;
  }

  private params(data: object): HttpParams {
    let params = new HttpParams();

    if (data) {
      Object.keys(data)
        .forEach((key) => params = params.set(key, data[key]));
    }

    return params;
  }

  private encode(data: any): string {
    const params = new URLSearchParams();

    if (data) {
      Object.keys(data)
        .forEach((key) => params.set(key, data[key]));
    }
    return params.toString();
  }

  private form(data: object): FormData {
    const form = new FormData();
    if (data) {
      Object.keys(data)
        .forEach((key) => form.append(key, data[key]));
    }
    return form;
  }

  private data(resource: Resource): any {
    if (resource.form) {
      return this.form(resource.form);
    }
    return resource.encode ? this.encode(resource.data) : resource.data;
  }

  private options(resource: Resource): object {
    const options = {};
    if (resource.headers) {
      options['headers'] = this.headers(resource.headers);
    }
    if (resource.params) {
      options['params'] = this.params(resource.params);
    }
    return options;
  }

  get<T>(resource: Resource): Observable<T> {
    return this.http.get<T>(this.url(resource), this.options(resource));
  }

  post<T>(resource: Resource): Observable<T>{
    return this.http.post<T>(this.url(resource), this.data(resource), this.options(resource));

  }

}
