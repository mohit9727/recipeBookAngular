import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	
	recipes: recipe[] = [
  	new recipe('A Test recipe','This is to test the class','https://www.publicdomainpictures.net/pictures/110000/velka/ham-and-potato-soup.jpg')
  	];
  constructor() { }

  ngOnInit() {
  }

}
