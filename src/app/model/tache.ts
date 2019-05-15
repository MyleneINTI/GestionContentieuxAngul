import { Affaire } from './affaire';
import { Tribunal } from './tribunal';
import { Phase } from './phase';

export class Tache {
    private idTache: number;
    private dateCreation: Date;
    private description: string;
    private titre: string;
    private statutAudience: boolean;
    private affaire: Affaire;
    private tribunal: Tribunal;
    private phases: Array<Phase> = new Array();

    get _idTache(): number{
        return this.idTache;
    }
    set _idTache(idTache: number){
        this.idTache=idTache;
    }
    get _dateCreation(): Date{
        return this.dateCreation;
    }
    set _dateCreation(dateCreation: Date){
        this.dateCreation=dateCreation;
    }
    get _description(): string{
        return this.description;
    }
    set _description(description: string){
        this.description=description;
    }
    get _titre(): string{
        return this.titre;
    }
    set _titre(titre: string){
        this.titre=titre;
    }
    get _statutAudience(): boolean{
        return this.statutAudience;
    }
    set _statutAudience(statutAudience: boolean){
        this.statutAudience=statutAudience;
    }
    get _affaire(): Affaire{
        return this.affaire;
    }
    set _affaire(affaire: Affaire){
        this.affaire=affaire;
    }
    get _tribunal(): Tribunal{
        return this.tribunal;
    }
    set _tribunal(tribunal: Tribunal){
        this.tribunal=tribunal;
    }
    get _phases(): Array<Phase>{
        return this.phases;
    }
    set _phases(phases: Array<Phase>){
        this.phases=phases;
    }
}
