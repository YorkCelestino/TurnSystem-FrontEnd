import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import Swal from 'sweetalert2';
import { DepartmentsComponent } from '../../components/departments/departments.component';
import { Router, Routes } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Departments } from 'src/app/models/departments';

@Component({
  selector: 'app-register-departments',
  templateUrl: './register-departments.component.html',
  styleUrls: ['./register-departments.component.css']
})

export class RegisterDepartmentsComponent implements OnInit {
  /*object for save departmens*/
  closeModalEvent = new EventEmitter<boolean>();

  @Input() department: Departments;

  public form: FormGroup;
  submitted = false;

  constructor(private departmentsService: DepartmentsService,
              private departmentsComponent: DepartmentsComponent,
              private router: Router,
              private fb: FormBuilder,
    ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nombreDepartamento: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

  }
   // convenience getter for easy access to form fields
   public get  f(): any {
    return this.form.controls;
   }

  /* close modal*/
  closeModal() {
    this.departmentsComponent.getDepartments();
    this.form.reset();
    this.submitted = false;
  }
   /*saving department*/
  saveDepartment() {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      } else {
         this.departmentsService.seveDepartment(this.form.value).subscribe(
           res => {
              this.form.reset();
              this.departmentsComponent.getDepartments();
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
    }

  updateDepartment() {
     console.log(this.department.id_Departamento);
    Swal.fire({
      title: 'Automatic Turn System',
      text: '¿ Estás seguro que desea actualizar este departamento ?',
      type: 'info',
      showCancelButton: true,
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

