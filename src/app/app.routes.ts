import { Routes } from '@angular/router';

import { Profiles } from './pages/profiles/profiles';

import { CreateProfile } from './pages/create-profile/create-profile';

import { UpdateProfile } from './pages/update-profile/update-profile';

import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    path: '',
    component: Profiles
  },
  {
    path: 'create',
    component: CreateProfile
  },
  {
    path: 'update/:id',
    component: UpdateProfile
  },
  {
    path: 'login',
    component: Login
  }
];