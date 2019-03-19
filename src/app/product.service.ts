import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import  'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumsUrl: string = '../assets/album.json';
  constructor(private _http: Http) {

  }

  getAlbum(id: number) {
    return this._http.get(this._albumsUrl).map(function (response) {
      return response.json();
    });
  }

}
