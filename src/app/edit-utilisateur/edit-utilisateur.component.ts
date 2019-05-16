import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../model/utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';


@Component({
  selector: 'app-edit-utilisateur',
  templateUrl: './edit-utilisateur.component.html',
  styleUrls: ['./edit-utilisateur.component.scss']
})
export class EditUtilisateurComponent implements OnInit {

  editForm: FormGroup;
  utilisateur: Utilisateur = new Utilisateur();
  constructor(private router: Router, private utilisateurService: UtilisateurService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    let utilisateurId = localStorage.getItem("editUtilisateurId");
    if(!utilisateurId)
    {
      alert("Invalid action...");
      this.router.navigate(['utilisateur-component']);
      return;
    }
    this.editForm = this.formBuilder.group({
      idUtilisateur : [],
      email : ['', Validators.required],
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
    });
    this.utilisateurService.getUtilisateur(+utilisateurId).subscribe(data => {this.editForm.setValue(data);})
  }
  updateUtilisateur(){
    var varJson=JSON.stringify(this.editForm.value);
    this.utilisateurService.updateUtilisateur(varJson).subscribe(
      () => {this.router.navigate(['utilisateur-component']);},
      error => {console.log(error);}
    );
  }
}
