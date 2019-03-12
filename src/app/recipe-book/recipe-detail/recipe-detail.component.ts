import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  componentName: string = "Recipe Details!";
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.onOtherService(this.componentName)
  }

}
