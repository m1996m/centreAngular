import { UserModel } from './user-model.Model';
import { FournisseurModel } from './fournisseur-model.Model';
import { ProduitModel } from './produit-model.Model';
import { StockModel } from './stock-model.Model';
export class ProduitStockModel {
    constructor(
        public id:number, 
        public pua:number,
        public puv:number,
        public quantite:number,
        public user?:UserModel,
        public fournisseur?:FournisseurModel,
        public produit?:ProduitModel,
        public stock?:StockModel
        ){}
}
