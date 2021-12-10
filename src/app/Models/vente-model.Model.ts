export class VenteModel {
    constructor(
        public id:number,
        public quantiteVendu?:number,
        public dateVente?:string,
        public idVente?:number,
        public nomClient?:string,
        public designationProduit?:string,
        public prenomClient?:string,
        public idClient?:number,
        public designationProduitType?:string,
        public idTypeProduit?:number,
        public prixVente?:number,
        public prixAchat?:number,
        public nomCentre?:string,
        public idCentre?:number,
        public idRayon?:number,
    ){}
}
