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
import { MatriculaComponent } from './utils/utilsTurnComponents/matricula/matricula.component';
import { OptionsComponent } from './utils/utilsTurnComponents/options/options.component';
import { CedulaComponent } from './utils/utilsTurnComponents/cedula/cedula.component';
import { MotivoTurnoComponent } from './utils/utilsTurnComponents/motivo-turno/motivo-turno.component';
import { InfoInstitutionComponent } from './utils/utilsConfigComponents/info-institution/info-institution.component';
import { InfoMultimediaComponent } from './utils/utilsConfigComponents/info-multimedia/info-multimedia.component';
import { DepartmentTurnoComponent } from './utils/utilsTurnComponents/department-turno/department-turno.component';
import { MotivosComponent } from './components/motivos/motivos.component';

const routes: Routes = [
  { path: '',
  canActivate: [AuthGuard],
  component: AdminComponent,
  children: [
    {
      path: 'atencion', component: AtencionComponent
    },
    {
      path: 'configuration', component: ConfigurationComponent,
      children: [
        {
          path: 'infoInstitution' , component: InfoInstitutionComponent
         // path: 'infoInstitution', loadChildren: './utils/utils.module#UtilsModule'
        },
        {
          path: 'infoMultimedia', component: InfoMultimediaComponent
          // path: 'infoMultimedia', loadChildren: './utils/utils.module#UtilsModule'
        }
      ]
    },
    {
      path: 'departments', component: DepartmentsComponent
    },
    {path: 'motivos', component: MotivosComponent},
    {path: 'users', component: UsersComponent},
    {path: 'report', component: ReportsComponent},
  ]
},

{path: 'espera',  canActivate: [AuthGuard], component: EsperaComponent},

  {path: 'turns', canActivate: [AuthGuard], component: TurnsComponent,
    children: [
      {path: 'options', component: OptionsComponent},
      {path: 'matricula', component: MatriculaComponent },
      {path: 'cedula', component: CedulaComponent},
      {path: 'departmentTurno', component: DepartmentTurnoComponent},
      {path: 'motivoTurno', component: MotivoTurnoComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
