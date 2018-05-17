import { modelo } from "./modelo.model";

export class Cliente extends modelo{
    public nome : string;
    public email : string;
    public foto : string;
    public fileImage : any;
    public file : string;
}