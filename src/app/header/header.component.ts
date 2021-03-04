import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerColor = '#7ea3d5';

  ngOnInit(): void {
  }
  changeColor() {
    const colorArray = ['#335d9f', '#7ea3d5', '#b3d2f7', '#98b9df', '#93acd9']; 
    this.headerColor = `${colorArray[Math.floor(Math.random() * 5)]}`;
  }
}
