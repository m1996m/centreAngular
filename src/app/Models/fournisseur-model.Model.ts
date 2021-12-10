export class FournisseurModel {
    constructor(
        public id:number,
        public nom:string,
        public adresse:string,
        public prenom:string,
        public tel:string,
        public dateNaissance:string,
        public slug?:string,
        public image?:string,
        public idCentre?:number,
        public nomCentre?:string,
    ){}
}
