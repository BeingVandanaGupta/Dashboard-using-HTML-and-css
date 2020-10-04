import { Component, Input, ɵɵInheritDefinitionFeature } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces:true
})
export class AppComponent {
  title = 'vandana';

  user:string;
  password:string;
  
  
  constructor() { }

  ngOnInit(): void {
  }
  
  loginfunction()
  {
    
     alert("your data save successfully");
  
     
 
  }
}
