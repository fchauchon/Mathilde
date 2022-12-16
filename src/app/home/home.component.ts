import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



import { DataService } from '../data.service';
@Component({



  selector: 'app-home',



  templateUrl: './home.component.html',



  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {

  perso: Array<any> = new Array<any>()

  constructor(private route: ActivatedRoute, private dataService : DataService) { }


  ngOnInit(): void {
    this.dataService.getPersoFilms().subscribe(
        (perso : any[]) => {this.dataService.getPersoFilms()
        }
    )
  }

}
