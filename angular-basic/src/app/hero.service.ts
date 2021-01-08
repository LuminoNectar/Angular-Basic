import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes() {
    return of(HEROES);
    // return new Promise<Hero[]>(
    //   (resolve, reject) => resolve(HEROES) //Make this an asyncronise call
  }
  constructor() { }
}
