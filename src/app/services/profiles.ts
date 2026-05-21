import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Profile {
  _id: string;
  name: string;
  age: number;
  hobbies?: string[];
  __v: number;
}

interface ProfilesResponse {
  message: string;
  data: Profile[];
}

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'http://localhost:3000';

  PROFILES: Profile[] = [];

  getProfiles(): Observable<ProfilesResponse> {
    return this.http.get<ProfilesResponse>(
      `${this.BASE_URL}/api/profiles`
    );
  }

  addProfile(profile: Profile): void {
    this.http.post<{ message: string }>(
      `${this.BASE_URL}/api/create-profile`,
      { name: profile.name, age: profile.age }
    ).subscribe(result => {
      console.log(result);
      this.PROFILES.push(profile);
    });}

  addHobbies(profileId: string, hobby: string) {

    return this.http.put(
      `${this.BASE_URL}/api/update/profiles/${profileId}/add-hobby`,
      { hobby: hobby }
    );

  }
  deleteProfile(id: string) {

    return this.http.delete(
      `${this.BASE_URL}/api/delete-profile/${id}`
    );

  }

  increaseAge(id: string) {

    return this.http.put(

      `${this.BASE_URL}/api/update/profiles/${id}/increase-age`,

      {}

    );

  }
}