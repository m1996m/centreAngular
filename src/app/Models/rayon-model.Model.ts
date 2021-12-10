export class RayonModel {
    constructor(
        public id:number,
        public quantite:number,
        public designationType?:string,
        public designationProduit?:string,
        public idType?:number,
        public nomCentre?:string,
        public idCentre?:number,
        public idProduitStock?:number,
        public idStock?:number,
        public total?:number,
        public typeProduit?:string,
        public idProduit?:number,
        public PUAProduitStock?:number,
        public PUVProduitStock?:number,
        public designatioStock?:string,
    ){}
}
