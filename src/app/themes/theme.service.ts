import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  storedTheme:string = localStorage.getItem('theme-color');
  constructor() { }

  setTheme(theme){
    
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color')
    console.log(this.storedTheme);
    return this.storedTheme
  }
  getTheme(){
    return this.storedTheme
  }
}
