import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoInstitutionComponent } from './utilsConfigComponents/info-institution/info-institution.component';
import { AdminComponent } from '../components/admin/admin.component';
import { ConfigurationComponent } from '../components/configuration/configuration.component';
import { InfoMultimediaComponent } from './utilsConfigComponents/info-multimedia/info-multimedia.component';

const secondaryRoutes: Routes = [
// { path: 'infoInstitution', component: InfoInstitutionComponent}
  {
    path: 'infoInstitution',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ConfigurationComponent,
        children: [
           {path: '', component: InfoInstitutionComponent}
        ]
      }
    ]
  },
  {
    path: 'InfoMultimedia',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ConfigurationComponent,
        children: [
           {path: '', component: InfoMultimediaComponent}
        ]
      }
    ]

  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(secondaryRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class UtilsRoutingModule { }
