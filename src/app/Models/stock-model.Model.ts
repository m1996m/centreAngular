export class StockModel {
    constructor(
        public id:number, 
        public nom:string, 
        public content:string, 
        public adresse:string, 
        public nomCentre?:string,
        public idCentre?:number,
        public telCentre?:string,
        public adresseCentre?:string,
        ){}
}
