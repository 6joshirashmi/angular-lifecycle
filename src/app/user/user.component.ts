import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../interface/user';
import { of } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnChanges, OnInit , DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  @Input() user!:User;
  username!:string;
  change:number=0;
  it:number=0;
  do:number=0;
  after:number=0;  
  check:number=0;
  
  ngOnChanges(changes: SimpleChanges) {
    const user = changes['user'];
    
    if(!user)
      {
        return user;
      }
      const { currentValue, previousValue, firstChange } = user;
      console.log(currentValue, previousValue, firstChange,'hhhhhhhhhhhhhhh'); 
      this.change=this.change+1;
      console.log(this.change ,'ngOnChanges');      
      
    }
    
    
    ngOnInit(): void {
      
      this.getUserName(this.user.name).subscribe((d)=>{
        this.username=d;
      })
      console.log('shree  '+this.username);
      this.it=this.it+1;
      console.log(this.it,'ngOnInit');
      
    }
    
    ngDoCheck(): void {
      
      this.getUserName(this.user.name).subscribe((d)=>{
        this.username=d;
      })
      console.log(this.username);
      this.do=this.do+1;
      console.log(this.do,'ngDoCheck');
      
    }
    
    
    ngAfterContentChecked(): void {
      this.after=this.after+1;
      console.log( this.after,'ngAfterContentChecked');      
    }
    
    
    ngAfterContentInit(): void {
      this.check=this.check+1;
      console.log( this.check,'ngAfterContentInit');      
      
    }
    
    
    ngAfterViewInit(): void {
      
      console.log( 'ngAfterViewInit');   
    }
    
    ngAfterViewChecked(): void {
      console.log( 'ngAfterViewChecked');   

    }

    getUserName(name:string){
      return of(  name+' jai ho')
    }
  }
