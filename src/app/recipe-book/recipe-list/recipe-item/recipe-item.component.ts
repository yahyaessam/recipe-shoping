import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit , DoCheck {
  @ViewChild('mainForm') mainForm: NgForm
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.mainForm.value);
  }
  ngDoCheck() {
    console.log('something changed');
  }

}
