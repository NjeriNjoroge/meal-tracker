import { Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name:'id',
  pure: false
})

export class CaloriesPipe implements PipeTransform{
  transform(input:Meal[], selectedCalories){
    var output:Meal[]=[];
    if(selectedCalories === 'more'){
      for(var i =0; i <input.length; i++){
        if(input[i].id>500){
          output.push(input[i])
        }
      }
      return output;
    }
    if (selectedCalories === 'less'){
      for(var i=0; i<input.length;i++){
        if (input[i].id<500){
          output.push(input[i]);
        }
      }
      return output;
    }else{
      return input;
    }
  }
}
