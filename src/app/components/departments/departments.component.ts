import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  /*departments array*/
  departments: any = [];

  selected: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  /*constructor of the class*/
  constructor(private departmentsService: DepartmentsService,
              private activatedRoute: ActivatedRoute
    ) {
  }
  toggleModal (data: any) {
    this.selected = data;
  }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      // pageLength: 5,
       retrieve: true,
      // paging: false
    };
    this.getDepartments();
  }

  /*getting departments*/
  getDepartments() {
    this.departmentsService.getdepartments().subscribe(
      res => {
        this.departments = res;
         // Calling the DT trigger to manually render the table
         this.dtTrigger.next();
      },
      err => {
        console.log(err);
      }
    );
  }

  /*deleting department*/
  deleteDepartment(id: Number | string) {

    Swal.fire({
      title: 'Automatic Turn System',
      text: '¿ Estás seguro que desea Deshabilitar este departamento ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Deshabilitar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Automatic Turn System!',
          '¡Deshabilitado con éxito!',
          'success'
        );
        this.departmentsService.deleteDepartment(id).subscribe(
          res => {
              console.log(res);
              this.getDepartments();
          },
          err => console.log(err)
        );
      }
    });
  }
}
