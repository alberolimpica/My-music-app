import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Artist } from '../Models/Artist';
import { Album } from '../Models/Album';

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  baseURL: string = "http://localhost:3000/";
  private searchUrl: string;

  constructor(private http: HttpClient) { }

  searchMusic(type:string){
    const headers = { 'content-type': 'application/json'}
    this.searchUrl = this.baseURL + type + "/"+"all";
    return this.http.get(this.searchUrl, {headers: headers }).pipe(map((res: any) => {
      console.log(res);
      return res;
    }));
  }

  addMusic(object:any, type:string){
    console.log(object);
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(object);
    console.log(body)
    return this.http.post(this.baseURL + type, body,{'headers':headers}).pipe(map((res: any) => {
      console.log(res);
    }));
  }


  getMusic(id:string, type:string){
    const headers = { 'content-type': 'application/json'}
    return this.http.get(this.baseURL + type + '/' + id,{'headers':headers}).pipe(map((res: any) => {
      console.log(res);
      return res;
    }));
  }

  updateMusic(id:string, object:Object, type:string){
    console.log("updateArtist", object);
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(object);
    console.log(body)
    return this.http.put(this.baseURL + type + '/' + id, body,{'headers':headers}).pipe(map((res: any) => {
      console.log(res);
    }));
  }

  deleteMusic(id:string, type:string){
    console.log("deleteArtist", id);
    const headers = { 'content-type': 'application/json'}
    return this.http.delete(this.baseURL + type +'/' + id ,{'headers':headers}).pipe(map((res: any) => {
      console.log("deleteArtist", res);
      return res;
    }));
  }
}
