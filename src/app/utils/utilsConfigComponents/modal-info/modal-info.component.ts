import { Component, OnInit, Input } from '@angular/core';
import { InfoInstitucion } from 'src/app/models/infoinstitucion';
import { InfoInstitutionService } from 'src/app/services/info-institution.service';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {
  @Input() infoInstitucion: InfoInstitucion = {
    nombreInstitucion: '',
  };
  info;
  constructor(private infoInstitutionService: InfoInstitutionService) {
  }

  ngOnInit() {
  }

  editInfo() {
    console.log(this.infoInstitucion);

    this.infoInstitutionService.editInfoInstition(this.infoInstitucion)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
}
