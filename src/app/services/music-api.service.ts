import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  baseURL: string = "http://localhost:3000/";
  private searchUrl: string;

  constructor(private http: HttpClient) { }

  searchMusic(type: string) {
    const headers = { 'content-type': 'application/json' }
    this.searchUrl = this.baseURL + type + "/" + "all";
    return this.http.get(this.searchUrl, { headers: headers }).pipe(map((res: any) => {
      return res;
    }));
  }

  addMusic(object: any, type: string) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(object);
    return this.http.post(this.baseURL + type, body, { 'headers': headers }).pipe(map((res: any) => {
      return res;
    }));
  }


  getMusic(id: string, type: string) {
    const headers = { 'content-type': 'application/json' }
    return this.http.get(this.baseURL + type + '/' + id, { 'headers': headers }).pipe(map((res: any) => {
      return res;
    }));
  }

  updateMusic(id: string, object: Object, type: string) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(object);
    return this.http.put(this.baseURL + type + '/' + id, body, { 'headers': headers }).pipe(map((res: any) => {
    }));
  }

  deleteMusic(id: string, type: string) {
    const headers = { 'content-type': 'application/json' }
    return this.http.delete(this.baseURL + type + '/' + id, { 'headers': headers }).pipe(map((res: any) => {
      return res;
    }));
  }
}
