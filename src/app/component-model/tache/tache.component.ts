import { Component, OnInit } from '@angular/core';
import { Tache } from 'src/app/model/tache';
import { TacheService } from 'src/app/service/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {

  taches:any[];
  tache: Tache = new Tache();
  constructor(private tacheService:TacheService) { }

  ngOnInit() {
    this.loadTache();
  }

  loadTache(){
    this.tacheService.getAllTaches().subscribe(data => {this.taches = data;}, 
      error => {console.log(error);});
  }

  createTache(){
    this.tacheService.saveTache(this.tache).subscribe(()=>{this.loadTache();
      this.tache = new Tache();})
  }

  deleteTache(tache){
    this.tacheService.deleteTache(tache.idTache).subscribe(()=>
      {this.loadTache();}, error=>console.log(error));
  }

}
