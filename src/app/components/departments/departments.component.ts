import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  /*departments array*/
  departments: any = [];
  selected;
  /*constructor of the class*/
  constructor(private departmentsService: DepartmentsService,
              private activatedRoute: ActivatedRoute
    ) {
    this.getDepartments();
  }
  toggleModal (data: any) {
    this.selected = data;
  }
  ngOnInit() {
  }

  /*getting departments*/
  getDepartments() {
    this.departmentsService.getdepartments().subscribe(
      res => {
        this.departments = res;
      }
    );
  }
  /*deleting department*/
  deleteDepartment(id: any) {

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
