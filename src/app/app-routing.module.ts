import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TodayComponent} from "./dashboard/calendar/today/today.component";
import {ThisWeekComponent} from "./dashboard/calendar/this-week/this-week.component";
import {NextWeekComponent} from "./dashboard/calendar/next-week/next-week.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
      {path: 'today', component: TodayComponent},
      {path: 'this-week', component: ThisWeekComponent},
      {path: 'next-week', component: NextWeekComponent},
      {path: '', redirectTo: '/dashboard/today', pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
