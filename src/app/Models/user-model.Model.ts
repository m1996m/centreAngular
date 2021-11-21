import { CentreModel } from './centre-model.Model';
export class UserModel {
    constructor(
        public id:number,
        public email:string,
        public password:string,
        public nom:string,
        public prenom:string,
        public tel:string,
        public dateNaissance:string,
        public slug:string,
        public first:number,
        public image:string,
        public actifi: string,
        public centre?:CentreModel,
    ){}
}
