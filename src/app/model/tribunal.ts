import { Tache } from './tache';

export class Tribunal {
    private idTribunal: number;
    private adresse: string;
    private fax: number;
    private tel: number;
    private region: string;
    private taches: Array<Tache> = new Array();

    get _idTribunal(): number{
        return this.idTribunal;
    }
    set _idTribunal(idTribunal: number){
        this.idTribunal=idTribunal;
    }
    get _adresse(): string{
        return this.adresse;
    }
    set _adresse(adresse: string){
        this.adresse=adresse;
    }
    get _fax(): number{
        return this.fax;
    }
    set _fax(fax: number){
        this.fax=fax;
    }
    get _tel(): number{
        return this.tel;
    }
    set _tel(tel: number){
        this.tel=tel;
    }
    get _region(): string{
        return this.region;
    }
    set _region(region: string){
        this.region=region;
    }
    get _taches(): Array<Tache>{
        return this.taches;
    }
    set _taches(taches: Array<Tache>){
        this.taches=taches;
    }
}
