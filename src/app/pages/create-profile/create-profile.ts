import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfilesService } from '../../services/profiles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  imports: [FormsModule],
  templateUrl: './create-profile.html',
  styleUrl: './create-profile.css',
})
export class CreateProfile {
  name = '';
  age = '';

  constructor(private service: ProfilesService,
    private router: Router
  ) { }

  createProfile() {
    const newProfile = {
      name: this.name,
      age: Number(this.age),
      _id: '',
      __v: 0
    }

    this.service.addProfile(newProfile)
    this.router.navigate(['/'])
  }
}
