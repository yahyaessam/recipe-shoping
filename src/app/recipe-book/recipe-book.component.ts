import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  mainID: number;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.mainID = res.id;
    });
  }

}
