import { Component, OnInit } from '@angular/core';
import { Affaire } from '../model/affaire';
import { AffaireService } from '../service/affaire.service';

@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.scss']
})
export class AffaireComponent implements OnInit {

  affaires:any[];
  affaire: Affaire = new Affaire();
  constructor(private affaireService:AffaireService) { }

  ngOnInit() {
    this.loadAffaire();
  }

  loadAffaire(){
    this.affaireService.getAllAffaires().subscribe(data => {this.affaires = data;}, 
      error => {console.log(error);});
  }

  createAffaire(){
    this.affaireService.saveAffaire(this.affaire).subscribe(()=>{this.loadAffaire();
      this.affaire = new Affaire();})
  }

  deleteAffaire(affaire){
    this.affaireService.deleteAffaire(affaire.idAffaire).subscribe(()=>
      {this.loadAffaire();}, error=>console.log(error));
  }


}
