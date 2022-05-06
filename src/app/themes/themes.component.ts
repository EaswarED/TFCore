import { Component, EventEmitter, OnInit, Output , ViewChild, AfterViewInit} from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  message:string
  storedTheme:string = localStorage.getItem('theme-color');
  constructor(private ThemeService: ThemeService) { }

  ngOnInit(): void {
    this.ThemeService.currentMessage.subscribe(message => this.message = message)
  }
  @Output() getThemeEvent = new EventEmitter<string>();
  setTheme(theme){
    // localStorage.setItem('theme-color', theme);
    // this.storedTheme = localStorage.getItem('theme-color')
    this.ThemeService.setTheme(theme);
    this.getThemeEvent.emit(this.ThemeService.setTheme(theme));
  }
  
}
