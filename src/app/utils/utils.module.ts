/**
*modules
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 *components
 */
import { RegisterComponent } from './register/register.component';
import { RegisterDepartmentsComponent } from './register-departments/register-departments.component';

/**
*Services
*/
import { UsersService } from '../services/users.service';
import { DepartmentsService } from '../services/departments.service';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterDepartmentsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent,
    RegisterDepartmentsComponent
  ],
  providers: [
    UsersService,
    DepartmentsService
  ]
})
export class UtilsModule { }
