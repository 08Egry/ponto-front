import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(public http: HttpClient) { }

  get(url: string): Promise<any> {
    const result = this.http.get(`${environment.api.url}${url}`);
    return lastValueFrom?.(result);
  }

  getAux(url: string): Promise<any> {
    const result = this.http.get(`${environment.api.url}${url}`);
    return lastValueFrom(result);
  }

  post(url: string, body: any): Promise<any> {
    const result = this.http.post(`${environment.api.url}${url}`, body);
    return lastValueFrom(result);
  }

  put(url: string, body: any, p0: unknown): Promise<any> {
    const result = this.http.put(`${environment.api.url}${url}`, body);
    return lastValueFrom(result);
  }


}
