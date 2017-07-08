import { Component } from '@angular/core';
import {MealListComponent} from './meal-list.component'

export class Meal {
  public done: boolean = false;
  constructor(public description: string, public id: number) {   }
}
