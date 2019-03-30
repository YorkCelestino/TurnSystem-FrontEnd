/**
*modules
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UtilsRoutingModule } from './utils-routing.module';

/**
 *components
 */
import { RegisterComponent } from './register/register.component';
import { RegisterDepartmentsComponent } from './register-departments/register-departments.component';
import { InfoInstitutionComponent } from './utilsConfigComponents/info-institution/info-institution.component';

/**
*Services
*/
import { UsersService } from '../services/users.service';
import { DepartmentsService } from '../services/departments.service';
import { InfoMultimediaComponent } from './utilsConfigComponents/info-multimedia/info-multimedia.component';
import { MatriculaComponent } from './utilsTurnComponents/matricula/matricula.component';
import { OptionsComponent } from './utilsTurnComponents/options/options.component';
import { CedulaComponent } from './utilsTurnComponents/cedula/cedula.component';
import { MotivoTurnoComponent } from './utilsTurnComponents/motivo-turno/motivo-turno.component';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterDepartmentsComponent,
    InfoInstitutionComponent,
    InfoMultimediaComponent,
    MatriculaComponent,
    OptionsComponent,
    CedulaComponent,
    MotivoTurnoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UtilsRoutingModule,
  ],
  exports: [
    RegisterComponent,
    RegisterDepartmentsComponent,
    InfoInstitutionComponent,
    OptionsComponent,
    MatriculaComponent,
  ],
  providers: [
    UsersService,
    DepartmentsService
  ]
})
export class UtilsModule { }
