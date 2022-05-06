import { Component, OnInit } from '@angular/core';
import { ThemeService } from './themes/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TFCore';
  storedTheme:string = localStorage.getItem('theme-color');

  index: number = 0;

    openNext() {
        this.index = (this.index === 15) ? 0 : this.index + 1;
    }

    openPrev() {
        this.index = (this.index === 0) ? 15 : this.index - 1;
    }

  constructor(private themeService: ThemeService){}

  ngOnInit(): void {

  }

  setTheme(theme){
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color')
  }
}
