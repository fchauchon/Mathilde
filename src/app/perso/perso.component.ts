import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({

  selector: 'app-perso',

  templateUrl: './perso.component.html',

  styleUrls: ['./perso.component.css']

})

export class PersoComponent implements OnInit {
  @Input() perso: any
  @Output() eventOut = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {

    return this.perso

  }
  }
