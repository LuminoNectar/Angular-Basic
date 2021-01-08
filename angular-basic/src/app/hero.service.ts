import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  getHeroes() {
    return of(HEROES);
    // return new Promise<Hero[]>(
    //   (resolve, reject) => resolve(HEROES) //Make this an asyncronise call
  }
}
