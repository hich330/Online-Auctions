/*
 [
 '{{repeat(5, 7)}}',
 {
 _id: '{{objectId()}}',
 isActive: '{{bool()}}',
 picture: 'http://placehold.it/140x140',
 prix_min: '{{integer(20, 1400)}}',
 categorie: '{{random("A", "B", "C")}}',
 titre: '{{firstName()}} {{surname()}}',
 description: '{{lorem(1, "paragraphs")}}',
 createdAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
 start_date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z)}}',
 user: {
 _id: '{{objectId()}}',
 name: '{{firstName()}} {{surname()}}',
 picture: 'http://placehold.it/32x32'
 }
 }
 ]
 */

export class Auction {

  public _id:string;
  public isActive:number;
  public picture:string;
  public prix_min:number;
  public categorie:string;
  public titre:string;
  public description:string;
  public createdAt:Date;
  public start_date:Date;
  public user:any;

  constructor() {
  }
}
