import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports:[
  CommonModule,
  NgtUniversalModule,
  RouterModule.forRoot(routes)
 
    
  ],
  providers: [],
})
export class AppModule { }
