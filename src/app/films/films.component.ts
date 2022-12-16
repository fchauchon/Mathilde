import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  ep1: string = 'assets/ep1.jfif'
  ep2: string = 'assets/ep2.jfif'
  ep3: string = 'assets/ep3.jfif'
  ep4: string = 'assets/ep4.jfif'
  ep5: string = 'assets/ep5.jfif'
  ep6: string = 'assets/ep6.jfif'
  ep7: string = 'assets/ep7.jfif'
  ep8: string = 'assets/ep8.jfif'
  ep9: string = 'assets/ep9.jfif'
  constructor() { }

  ngOnInit(): void {
  }

}
