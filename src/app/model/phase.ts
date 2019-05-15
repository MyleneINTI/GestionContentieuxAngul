import { Tache } from './tache';

export class Phase {
    private idPhase: number;
    private nom: string;
    private dateDebut: Date;
    private dateFin: Date;
    private tache: Tache;

    get _idPhase(): number{
        return this.idPhase;
    }
    set _idPhase(idPhase: number){
        this.idPhase=idPhase;
    }
    get _nom(): string{
        return this.nom;
    }
    set _nom(nom: string){
        this.nom=nom;
    }
    get _dateDebut(): Date{
        return this.dateDebut;
    }
    set _dateDebut(dateDebut: Date){
        this.dateDebut=dateDebut;
    }
    get _dateFin(): Date{
        return this.dateFin;
    }
    set _dateFin(dateFin: Date){
        this.dateFin=dateFin;
    }
    get _tache(): Tache{
        return this.tache;
    }
    set _tache(tache: Tache){
        this.tache=tache;
    }
}
