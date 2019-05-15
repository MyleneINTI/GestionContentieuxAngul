import {Role} from './role';
import {Tache} from './tache';

export class Utilisateur {
    private idUtilisateur: number;
    private email: string;
    private nom: string;
    private prenom: string;
    private username: string;
    private password: string;
    private roles: Array<Role> = new Array();
    private taches: Array<Tache> = new Array();

    get _idUtilisateur(): number{
        return this.idUtilisateur;
    }
    set _idUtilisateur(idUtilisateur: number){
        this.idUtilisateur=idUtilisateur;
    }
    get _email(): string{
        return this.email;
    }
    set _email(email: string){
        this.email=email;
    }
    get _nom(): string{
        return this.nom;
    }
    set _nom(nom: string){
        this.nom=nom;
    }
    get _prenom(): string{
        return this.prenom;
    }
    set _prenom(prenom: string){
        this.prenom=prenom;
    }
    get _username(): string{
        return this.username;
    }
    set _username(username: string){
        this.username=username;
    }
    get _password(): string{
        return this.password;
    }
    set _password(password: string){
        this.password=password;
    }
    get _roles(): Array<Role>{
        return this.roles;
    }
    set _roles(roles: Array<Role>){
        this.roles=roles;
    }
    get _taches(): Array<Tache>{
        return this.taches;
    }
    set _taches(taches: Array<Tache>){
        this.taches=taches;
    }
}
