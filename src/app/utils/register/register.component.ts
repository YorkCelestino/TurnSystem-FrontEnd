import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Listdepartment, UserSave, User } from '../../models/users';
import { UsersComponent } from '../../components/users/users.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  listaNombreDepartamento: Listdepartment; /*Array name of departments */
  @Input() user:  UserSave;
  public form: FormGroup;
  // f;
  selected: any;
  submitted = false;

  IDdeparment: Listdepartment = {
    id_Departamento: 0 ,
    nombreDepartamento: '',
  };
  // department: number;
  constructor( private usersService: UsersService,
              private usersComponent: UsersComponent,
              private router: Router,
              private fb: FormBuilder,
    ) {
      this.getNameDepartments();
  }

  toggleModal (data: any) {
    this.selected = data;
  }

  ngOnInit() {
  }
  setForm() {
   // console.log(this.listaNombreDepartamento[0]);
    this.form = this.fb.group({
      Id_Usuario: [0, Validators.required],
      nombre: ['', Validators.required],
      apellido :  ['', Validators.required],
      cedula :  ['', Validators.required],
      usuarios : ['', Validators.required],
      password:  ['', Validators.required],
      id_Departamento: [ this.listaNombreDepartamento[0].Id_departamento, Validators.required],
      role: ['', Validators.required]
    });
    // this.f = this.form.controls;
  }

   // convenience getter for easy access to form fields
    public get  f(): any {
      return this.form.controls;
    }

    /* close modal*/
  closeModal() {
   this.usersComponent.getUsers();
    this.form.reset();
    this.submitted = false;
  }

  /*getting name of departments */
  getNameDepartments() {
    this.usersService.getNameDeparment().subscribe(
      res => {
        this.listaNombreDepartamento = res;
        this.setForm();
      },
      err => console.log(err)
     );
  }

  /*adding user */
  saveUser() {
    this.submitted = true;
    if (this.form.invalid) {
      console.log(this.form.value);
      return;
    } else {
       this.usersService.saveUser(this.form.value).subscribe(
          res => {
            this.form.reset();
            this.usersComponent.getUsers();
            Swal.fire({
              type: 'success',
              title: 'Automatic Turn System',
              text: 'Ususario registrado con éxito',
              showConfirmButton: true,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Aceptar',
            });
          },
          err => console.error(err)
        );
    }
}

  updateUser() {
     this.usersService.updateUser(this.user.Id_Usuario , this.user)
     .subscribe(
       res => {
         console.log(res);
         this.usersComponent.getUsers();
       },
       err => {console.log(err); }
     );
  }
}
