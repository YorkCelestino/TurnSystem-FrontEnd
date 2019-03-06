import { Component, OnInit, Input } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import Swal from 'sweetalert2';
import { DepartmentsComponent } from '../../components/departments/departments.component';
import { Router, Routes } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-register-departments',
  templateUrl: './register-departments.component.html',
  styleUrls: ['./register-departments.component.css']
})

export class RegisterDepartmentsComponent implements OnInit {
  /*object for save departmens*/
  @Input() department: {
    id_Departamento: any;
    nombreDepartamento: string;
    descripcion: string;
    estado: string;
} ;
 public depart = {
  id_Departamento: '',
  nombreDepartamento: '',
  descripcion: '',
  estado: ''
};
  public form: FormGroup;
  constructor(private departmentsService: DepartmentsService,
              private departmentsComponent: DepartmentsComponent,
              private router: Router,
              private fb: FormBuilder,
    ) {
      this.depart = this.department;
      this.form = this.fb.group({
        'nombreDepartamento' : '',
        'descripcion': ''
      });
    }
  ngOnInit() {
  }

  /*saving departments*/
  saveDepartment() {
    // delete this.department.Estado;
    // delete this.department.Id_Departamento;
     this.departmentsService.seveDepartment(this.form.value).subscribe(
       res => {
         console.log(this.form.value);
          console.log(res);
          this.form.reset();
          this.departmentsComponent.getDepartments();
          // this.router.navigate(['/departments']);
       },
       err => console.error(err)
     );
     Swal.fire({
      type: 'success',
      title: 'Automatic Turn System',
      text: 'Departamento registrado con éxito!',
      showConfirmButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
    });
  }

  EditDepartment(Data) {

    Swal.fire({
      title: 'Automatic Turn System',
      text: '¿ Estás seguro que desea actualizar este departamento ?',
      type: 'info',
      showCancelButton: true,
      // confirmButtonColor: '#3085d6',
      // cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Actualizar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Automatic Turn System!',
          '¡Actualizado con éxito!',
          'success'
        );
        this.departmentsService.updateDepartment(this.department.id_Departamento, this.department)
        .subscribe(
          res => {
            console.log (res);
            this.departmentsComponent.getDepartments();
          },
          err => console.error(err)
        );
      }
  });
  }
}
