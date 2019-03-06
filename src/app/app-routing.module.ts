/*
*Modules
*/
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*
*components
*/
import { AuthGuard } from './auth/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AtencionComponent } from './components/atencion/atencion.component';
import { UsersComponent } from './components/users/users.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { EsperaComponent } from './components/espera/espera.component';
import { ReportsComponent } from './components/reports/reports.component';
import { TurnsComponent } from './components/turns/turns.component';

const routes: Routes = [
  { path: '',
  canActivate: [AuthGuard],
  component: AdminComponent,
  children: [
    {path: 'atencion', component: AtencionComponent},
    {path: 'configuration', component: ConfigurationComponent},
    {path: 'departments', component: DepartmentsComponent},
    {path: 'users', component: UsersComponent},
    {path: 'espera', component: EsperaComponent},
    {path: 'report', component: ReportsComponent},
    {path: 'turns', component: TurnsComponent}
  ] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
