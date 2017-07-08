import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `

  <div class="jumbotron">
    <h1>Meal Tracker</h1>
    <hr>
</div>
<h2>Monday</h2>
<div class="container row">
<div class="col-md-6">

    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
     ></meal-list>
     </div>
     <div class="col-md-6">
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
    </div>
  </div>
<br>
  <div class="container">

   <new-meal (newMealSender)="addMeal($event)"></new-meal>
 </div>

  `,
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("BreakFast: Tea, Eggs, Brown bread", 100),
      new Meal("Lunch: Pizza", 300),
      new Meal("Snack: Apple", 60),
      new Meal("Dinner: Ugali, Milk", 3)
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
  this.masterMealList.push(newMealFromChild);
}
}
