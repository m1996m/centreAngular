export class ClientModel {
    constructor(
        public id:number,
        public nom:string,
        public prenom:string,
        public adresse:string,
        public content:string,
        public tel:string,
        public dateNaissance:string,
        public nomCentre?:string,
        public idCentre?:number,
        public slug?:string,
        public image?:string,
        public idClient?:number,
    ){}
}
