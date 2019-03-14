import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Listdepartment, UserSave, User } from '../../models/users';
import { UsersComponent } from '../../components/users/users.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  listaNombreDepartamento: any = []; /*Array name of departments */
  @Input() user: User;
  public form: FormGroup;

  IDdeparment: Listdepartment = {
    Id_departamento: 0 ,
     nombreDepartamento: '',
  };
  // department: number;
  constructor( private usersService: UsersService,
              private usersComponent: UsersComponent,
              private router: Router,
              private fb: FormBuilder,
    ) {

    this.getNameDepartments();

      this.form = this.fb.group({
        Id_Usuario: 0,
        'nombre': '',
        'apellido' : '',
        'cedula' : '',
        'usuarios' : '',
        'password': '',
        'Id_departamento': ''
      });
  }
  ngOnInit() {
  }
  /*getting name of departments */
  getNameDepartments() {
    this.usersService.getNameDeparment().subscribe(
      res => {
        this.listaNombreDepartamento = res;
      },
      err => console.log(err)
     );
  }
/*adding user */
  saveNewUser() {
    // delete this.user.Id_Usuario;
    // delete this.user.Estado;
    this.usersService.saveUser(this.form.value).subscribe(
      res => {
        console.log(this.form.value);
        this.form.reset();
        this.usersComponent.getUsers();
      },
      err => console.error(err)
    );
    Swal.fire({
      type: 'success',
      title: 'Automatic Turn System',
      text: 'Ususario registrado con éxito',
      showConfirmButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
    });
  }

  editUser(id: any) {
      console.log(id);
  }
}
