import { Component, OnInit } from '@angular/core';
import { CandyDataService } from '../candy-data.service';
import { Candy } from '../candy';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  candies: Candy[];

  constructor(private candyDataService: CandyDataService) { }

  ngOnInit() {
    this.candyDataService.getCandy().subscribe(c => (this.candies = c));
    
  }

}
