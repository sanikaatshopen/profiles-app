import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-profile',
  imports: [FormsModule],
  templateUrl: './create-profile.html',
  styleUrl: './create-profile.css',
})
export class CreateProfile {
name='';
age='';

createProfile(){
  console.log({
    name:this.name,
    age:this.age
  })
}
}
