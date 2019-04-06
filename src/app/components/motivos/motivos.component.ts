import { Component, OnInit } from '@angular/core';
import { MotivosService } from 'src/app/services/motivos.service';
import { Motivos } from 'src/app/models/motivos';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-motivos',
  templateUrl: './motivos.component.html',
  styleUrls: ['./motivos.component.css']
})
export class MotivosComponent implements OnInit {
  motivos: Motivos;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  toggleEdit = false;
  toggleAdd = false;
  selected: any;
  constructor(private motivosService: MotivosService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      // pageLength: 5,
       retrieve: true,
      // paging: false
    };
    this.getMptivos();
  }
  toggleModal (data: any) {
    this.selected = data;
    this.toggleEdit = !this.toggleEdit;
  }
  onClose(event: any) {
    console.log(event);
    this.toggleEdit = false;
    this.toggleAdd = false;
  }
  getMptivos() {
    this.motivosService.getMotivos()
    .subscribe(
      res => {
        this.motivos = res;
         // Calling the DT trigger to manually render the table
         this.dtTrigger.next();
      },
      err => {
        console.log(err);
      }
    );
  }

}
