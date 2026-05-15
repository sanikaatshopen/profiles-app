import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profiles',
  imports: [CommonModule],
  templateUrl: './profiles.html',
  styleUrl: './profiles.css',
})
export class Profiles {
profiles=[
  {id:1,name:'Nidhi',age:21},{id:2,name:'Vidya',age:26},{id:3,name:'Priya',age:30}
]

deleteProfile(id:number){
  this.profiles=this.profiles.filter(
    profile =>profile.id !==id
  )
}
}
