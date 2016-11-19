import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';

import {AuctionService} from '../../services/auction.service';
import {Auction} from '../../models/auction';

@Component({
  selector: 'home',
  templateUrl: "./home.html",
  styleUrls: ['./home.css']
})

export class HomeComponent implements OnInit {
  auctions:Auction[] = [];

  constructor(private route:ActivatedRoute,
              private auctionService:AuctionService) {
  }

  //get auctions
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.auctionService.RecupererAuctions().subscribe(p => {
        this.auctions = p;
        console.log(this.auctions);
      }, err => {
        console.log(err);
      });
    });
  }
}
