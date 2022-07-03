import { DoCheck } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';
import { SharedService } from '../../shared-module/services/shared.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, DoCheck {
  heroes: Hero[];
  heroCount: number;

  constructor(private heroService: HeroService, private sharedService: SharedService) { }

  ngOnInit() {
    this.getHeroes();
  }

  ngDoCheck() {
    if (this.heroes && this.heroes.length !== this.heroCount) {
      this.heroCount = this.heroes.length;
      this.sharedService.setMessage(this.heroCount);
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
