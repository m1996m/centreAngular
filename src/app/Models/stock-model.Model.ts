import { CentreModel } from './centre-model.Model';
export class StockModel {
    constructor(public id:number, public nom:string, public content:string, public adresse:string, public centre?:CentreModel){}
}
