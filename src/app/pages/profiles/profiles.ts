import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesService } from '../../services/profiles';
import { FormsModule } from '@angular/forms';

interface Profile {
  _id: string;
  name: string;
  age: number;
  hobbies?: string[];
  __v: number;
}


@Component({
  selector: 'app-profiles',
  imports: [CommonModule, FormsModule],
  templateUrl: './profiles.html',
  styleUrl: './profiles.css',
})


export class Profiles {
  profiles: Profile[] = []

  constructor(private service: ProfilesService) {
    this.service.getProfiles().subscribe(result => {
      console.log(result);
      this.profiles = result.data;
    });
  }

  deleteProfile(id: string) {

    this.service.deleteProfile(id).subscribe(() => {

      this.profiles =
        this.profiles.filter(profile => profile._id !== id);

    });

  }

  addHobbies(profileId: string) {
    const hobbies = prompt('Enter hobbies separated by commas');
  }

  increaseAge(id: string) {

    this.service.increaseAge(id).subscribe({

      next: () => {

        const profile = this.profiles.find(

          profile => profile._id === id

        );

        if (profile) {

          profile.age++;

        }

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  selectedProfileId = '';

  hobbyInput = '';
  saveHobbies(profileId: string) {

    if (!this.hobbyInput) return;

    const hobbies = this.hobbyInput
      .split(',')
      .map(hobby => hobby.trim());

    hobbies.forEach(hobby => {

      this.service.addHobbies(profileId, hobby)
        .subscribe((result: any) => {

          console.log(result);

        });

    });

    const profile = this.profiles.find(
      profile => profile._id === profileId
    );

    if (profile) {

      profile.hobbies = hobbies;

    }

    this.hobbyInput = '';

  }
}
