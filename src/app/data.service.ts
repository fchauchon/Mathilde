import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';



@Injectable({

  providedIn: 'root'

})

export class DataService {



  protected persoLuke = [

    { name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color:'fair', eye_color: 'blue', gender:'male', homeworld:'https://swapi.dev/api/planets/1/', img: 'assets/luke.jpg' }

]



  constructor(private httpClient : HttpClient) { }





  getPersoFilms(): Observable<any>{

    return this.httpClient.get<any[]>('https://swapi.dev/api/people/1/').pipe(

      map( (data: any) => data['perso']),

           map( (tab: any[]) => {

            const newArray: any[] = []

                let newElem= {

                  name: ['name'],

                  height: ['height'],

                  mass: ['mass'],

                  hair_color: ['hair_color'],

                  skin_color: ['skin_color'],

                  eye_color: ['eye_color'],

                  gender: ['gender'],

                  homeworld: ['homeworld'],

                  films: ['films'],

                  vehicles: ['vehicles'],

                  starships: ['starships']




                }

                newArray.push(newElem)



            return newArray

           }



           )

        )

}

}


