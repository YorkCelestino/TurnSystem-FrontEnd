/**
*modules
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UtilsRoutingModule } from './utils-routing.module';
import { NgxMaskModule } from 'ngx-mask';


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
import { DepartmentTurnoComponent } from './utilsTurnComponents/department-turno/department-turno.component';
import { ModalInfoComponent } from './utilsConfigComponents/modal-info/modal-info.component';
import { RegisterMotivosComponent } from './register-motivos/register-motivos.component';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterDepartmentsComponent,
    InfoInstitutionComponent,
    InfoMultimediaComponent,
    MatriculaComponent,
    OptionsComponent,
    CedulaComponent,
    MotivoTurnoComponent,
    DepartmentTurnoComponent,
    ModalInfoComponent,
    RegisterMotivosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    UtilsRoutingModule,
  ],
  exports: [
    RegisterComponent,
    RegisterDepartmentsComponent,
    InfoInstitutionComponent,
    OptionsComponent,
    MatriculaComponent,
    RegisterMotivosComponent
  ],
  providers: [
    UsersService,
    DepartmentsService
  ]
})
export class UtilsModule { }
