import { Tache } from './tache';

export class Affaire {
    private idAffaire: number;
    private reference: string;
    private titre: string;
    private description: string;
    private statut: number;
    private taches: Array<Tache> = new Array();

    get _idAffaire(): number{
        return this.idAffaire;
    }
    set _idAffaire(idAffaire: number){
        this.idAffaire=idAffaire;
    }
    get _reference(): string{
        return this.reference;
    }
    set _reference(reference: string){
        this.reference=reference;
    }
    get _titre(): string{
        return this.titre;
    }
    set _titre(titre: string){
        this.titre=titre;
    }
    get _description(): string{
        return this.description;
    }
    set _description(description: string){
        this.description=description;
    }
    get _statut(): number{
        return this.statut;
    }
    set _statut(statut: number){
        this.statut=statut;
    }
    get _taches(): Array<Tache>{
        return this.taches;
    }
    set _taches(taches: Array<Tache>){
        this.taches=taches;
    }
}
