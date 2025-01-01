import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchItem : string = '';
  items :string[] = ["kalyan","Nani","Ratnam","Naidu"];
  constructor() { }

  ngOnInit(): void {
  }


  get filterItems(): string[] {
 
    return this.items.filter(item => item.toLowerCase().includes(this.searchItem.toLowerCase()))
  }
  
}
