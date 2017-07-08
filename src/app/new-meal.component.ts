import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <h1>New Entry</h1>
  <div>
    <label>Enter Meal:</label>
    <input class="form-control" #newDescription>
  </div>
  <div>
    <label>Number Of Calories:</label>
    <input class="form-control" #newId>
    <br>
    <button (click)="addClicked(newDescription.value, newId.value)" class="btn btn-success">Add</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(description: string, id: number) {
    var newMealToAdd: Meal = new Meal(description, id);
    this.newMealSender.emit(newMealToAdd);
  }
}
