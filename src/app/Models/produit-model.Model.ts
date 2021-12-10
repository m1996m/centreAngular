import { TypeProduitModel } from './type-produit-model.Model';
export class ProduitModel {
    constructor(
        public id:number,
        public designation:string, 
        public content:string, 
        public PUA:number, 
        public PUV:number,
        public designationTypeProduit?:string,
        public idTypeProduit?:number,
        public nomCentre?:string,
        public idCentre?:number,
        public image?:string,
        public adresseCentre?:string,
        ){}
}
