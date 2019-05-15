import { Component, OnInit } from '@angular/core';
import { Tribunal } from 'src/app/model/tribunal';
import { TribunalService } from 'src/app/service/tribunal.service';

@Component({
  selector: 'app-tribunal',
  templateUrl: './tribunal.component.html',
  styleUrls: ['./tribunal.component.scss']
})
export class TribunalComponent implements OnInit {

  tribunaux:any[];
  tribunale : Tribunal = new Tribunal();
  constructor(private tribunalService:TribunalService) { }

  ngOnInit() {
    this.loadTribunal();
  }

  loadTribunal()
  {
    this.tribunalService.getAllTribunaux().subscribe(data => {this.tribunaux = data;}, 
      error => {console.log(error);});
  }

}
