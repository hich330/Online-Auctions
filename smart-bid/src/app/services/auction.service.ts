import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Auction} from "../models/auction";

@Injectable()
export class AuctionService {
  private UrlWebApi = 'http://localhost:4200/json/auctions.json';
  private http:Http;
  public Auctions:Auction[];

  constructor(http:Http) {
    this.http = http;
  }

  RecupererAuctions():Observable<Auction[]> {
    let Auctions = this.http .get(this.UrlWebApi, {headers: this.getHeaders()}) .map(response => response.json());
    return Auctions;
  }

  ChercherParId(id:string):Auction {
    let auct:Auction;
    this.RecupererAuctions().subscribe(p => {
      this.Auctions = p;
      for (let item of this.Auctions) {
        if (item._id == id) {
          auct = item;
        }
      }
    }, err => {
      console.log(err);
    });
    return auct;
  }

  AjouterAuction(auction:Auction) {
    this.Auctions.push(auction);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
