import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileModuleRoutingModule } from './profile-module-routing.module';
import { ProfileComponent } from '../profile/profile.component';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileModuleRoutingModule
  ]
})
export class ProfileModuleModule { }
