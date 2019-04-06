import { Component, OnInit } from '@angular/core';
import { InfoInstitutionService } from 'src/app/services/info-institution.service';
import { InfoInstitucion } from 'src/app/models/infoinstitucion';

@Component({
  selector: 'app-info-institution',
  templateUrl: './info-institution.component.html',
  styleUrls: ['./info-institution.component.css']
})
export class InfoInstitutionComponent implements OnInit {

  infoinstitucion: InfoInstitucion;
  selected: InfoInstitucion;
  constructor( private  infoInstitutionService: InfoInstitutionService) {

    this.getInfoInstitution();
   }

  ngOnInit() {
  }

  getInfoInstitution() {
    this.infoInstitutionService.getInfoInstition()
    .subscribe(
      res => {
        this.infoinstitucion = res;
          // console.log(res);
      },
      err => console.log(err),
    );
  }

  toggleModal(data: any) {
    this.selected = data;
  }

}
