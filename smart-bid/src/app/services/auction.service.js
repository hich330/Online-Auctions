"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var AuctionService = (function () {
    function AuctionService(http) {
        this.UrlWebApi = 'http://localhost:4200/json/auctions.json';
        this.http = http;
    }
    AuctionService.prototype.RecupererAuctions = function () {
        var Auctions = this.http.get(this.UrlWebApi, { headers: this.getHeaders() }).map(function (response) { return response.json(); });
        return Auctions;
    };
    AuctionService.prototype.ChercherParId = function (id) {
        var _this = this;
        var auct;
        this.RecupererAuctions().subscribe(function (p) {
            _this.Auctions = p;
            for (var _i = 0, _a = _this.Auctions; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item._id == id) {
                    auct = item;
                }
            }
        }, function (err) {
            console.log(err);
        });
        return auct;
    };
    AuctionService.prototype.AjouterAuction = function (auction) {
        this.Auctions.push(auction);
    };
    AuctionService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    AuctionService = __decorate([
        core_1.Injectable()
    ], AuctionService);
    return AuctionService;
}());
exports.AuctionService = AuctionService;
//# sourceMappingURL=auction.service.js.map