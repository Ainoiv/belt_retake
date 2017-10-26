import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './survey/survey.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'create', component: CreateComponent},
    { path: 'survey', component: SurveyComponent},
    { path: '**', redirectTo: '/login'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
