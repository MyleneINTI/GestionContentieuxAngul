import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  utilisateurs: any[];
  utilisateur: Utilisateur = new Utilisateur

  constructor(private utilisateurService:UtilisateurService,private router: Router) { }

  ngOnInit() {
    this.loadUtilisateur();
  }

  loadUtilisateur(){
    this.utilisateurService.getAllUtilisateurs().subscribe(data => {this.utilisateurs = data;}, 
      error => {console.log(error);});
  }

  createUtilisateur(){
    this.utilisateurService.saveUtilisateur(this.utilisateur).subscribe(()=>{this.loadUtilisateur();
      this.utilisateur = new Utilisateur();})
  }

  deleteUtilisateur(utilisateur){
    this.utilisateurService.deleteUtilisateur(utilisateur.idUtilisateur).subscribe(()=>
      {this.loadUtilisateur();}, error=>console.log(error));
  }

  editUtilisateur(utilisateur):void{
    localStorage.removeItem("editUtilisateurId");
    localStorage.setItem("editUtilisateurId", utilisateur.idUtilisateur.toString());
    this.router.navigate(['editUtilisateur', utilisateur.idUtilisateur]);
  }

}
