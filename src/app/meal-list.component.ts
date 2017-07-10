import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onchange ($event.target.value)">
    <option value="all">All Items</option>
    <option value="more">Above 500</option>
    <option value="less">Below 500</option>
  </select>
    <div *ngFor="let currentMeal of childMealList | id:selectedCalories">
      <h3>{{ currentMeal.description }}</h3>
      <button (click)="editButtonHasBeenClicked(currentMeal)" class="btn btn-danger">Edit</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCalories:string="all";
  onchange(value){
    this.selectedCalories = value;
  }
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
