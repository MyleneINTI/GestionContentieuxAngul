export class Role {
    private idRole: number;
    private libelle: string;

    get _idRole(): number{
        return this.idRole;
    }
    set _idRole(idRole: number){
        this.idRole=idRole;
    }
    get _libelle(): string{
        return this.libelle;
    }
    set _libelle(libelle: string){
        this.libelle=libelle;
    }
}
