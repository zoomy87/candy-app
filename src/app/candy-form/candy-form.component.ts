import { Component, OnInit } from '@angular/core';
import { CandyDataService } from '../candy-data.service';
import { Candy } from '../candy';
import { Router } from '@angular/router';
//import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-candy-form',
  templateUrl: './candy-form.component.html',
  styleUrls: ['./candy-form.component.css']
})
export class CandyFormComponent implements OnInit {

  currentCandy: Candy = new Candy();

  constructor(private candyDataService: CandyDataService, private router: Router) { }

  addCandy(): void {
    this.candyDataService.addCandy(this.currentCandy);
    this.currentCandy = new Candy();
  }

  ngOnInit() {
  }

}
