import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-meal',
  templateUrl: './hero-meal.component.html',
  	styleUrls: ['./hero-meal.component.css']
})
export class HeroMealComponent implements OnInit {

  @Input() curr : Hero;
  constructor() { 
  console.log('dsfsdgsdgsgsgsgsgsg');}

  ngOnInit() {

  }



}
