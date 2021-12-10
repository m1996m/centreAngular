import { UserModel } from './user-model.Model';
import { FournisseurModel } from './fournisseur-model.Model';
import { ProduitModel } from './produit-model.Model';
import { StockModel } from './stock-model.Model';
export class ProduitStockModel {
    constructor(
        public id:number, 
        public PUA:number,
        public PUV:number,
        public quantite:number,
        public total?:number,
        public designationTypeProduit?:string,
        public noms?:string,
        public nomUser?:string,
        public prenomUser?:string,
        public nomf?:string,
        public prenomf?:string,
        public telf?:string,
        public idf?:number,
        public idUser?:number,
        public ids?:number,
        public idP?:number,
        public designation?:string,
        public produit?:ProduitModel,
        public user?:UserModel,
        public fournisseur?:FournisseurModel,
        public stock?:StockModel
        ){}
}
