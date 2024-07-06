import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-lifecycle';
 
  user={name:'Vaidehi',id:101,email:'vaidehi@rama.com'};

  setname(name:string){
this.user.name=name;
  }

  ngOnChanges() {
   
      console.log('app ngOnChanges');   
    }
    
    
    ngOnInit(): void {      
      
      console.log('app ngOnInit');      
    }
    
    ngDoCheck(): void {      
      
      
      console.log('app ngDoCheck');      
    }
    
    
    ngAfterContentInit(): void {
      
      console.log( 'app ngAfterContentInit');        
    }
    
    
    ngAfterContentChecked(): void {
      
      console.log('app ngAfterContentChecked');      
    }
    
    
    ngAfterViewInit(): void {      
      console.log( 'app ngAfterViewInit');   
    }
    
    ngAfterViewChecked(): void {
      console.log( 'app ngAfterViewChecked'); 
    }

    ngDestroy():void{
    }

}
