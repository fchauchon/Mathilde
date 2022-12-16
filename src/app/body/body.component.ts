import { Component, OnInit, Input } from '@angular/core';



import { DataService } from '../data.service';





@Component({



  selector: 'app-body',



  templateUrl: './body.component.html',



  styleUrls: ['./body.component.css']



})



export class BodyComponent implements OnInit {

  perso: Array<any> = new Array<any>()









  constructor(private dataService : DataService) { }






  ngOnInit(): void {
    this.dataService.getPersoFilms().subscribe(
        (perso : any[]) => {this.perso=perso
        }
    )
  }

}
