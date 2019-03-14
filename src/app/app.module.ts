/**
 * Modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UtilsModule } from './utils/utils.module';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AtencionComponent } from './components/atencion/atencion.component';
import { UsersComponent } from './components/users/users.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { EsperaComponent } from './components/espera/espera.component';
import { ReportsComponent } from './components/reports/reports.component';
import { TurnsComponent } from './components/turns/turns.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { StartComponent } from './components/start/start.component';

/**
 * services
 */
import { UsersService } from './services/users.service';
import { DepartmentsService } from './services/departments.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserServiceLogin } from './auth/user.service';
import { AuthGuard } from './auth/auth.guard';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AtencionComponent,
    UsersComponent,
    DepartmentsComponent,
    ConfigurationComponent,
    EsperaComponent,
    ReportsComponent,
    TurnsComponent,
    ProfileComponent,
    AboutComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    UtilsModule,
  ],
  providers: [
    UsersService,
    DepartmentsService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  AuthGuard,
  UserServiceLogin
],
  bootstrap: [AppComponent]
})
export class AppModule { }
