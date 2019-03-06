import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/users';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  /*users array*/
  users: any = [];
  selected: any;

  constructor(private usersService: UsersService,
              private activatedRoute: ActivatedRoute
    ) {
    this.getUsers();
  }
  toggleModal (data: any) {
    this.selected = data;
    console.log(this.selected);
  }
  ngOnInit () {
  }

    /*getting users*/
    getUsers() {
      this.usersService.getUsers().subscribe(
        res => {
          this.users = res;
        },
        err => console.error(err)
      );
    }

    deleteUser(id: Number | string) {
      Swal.fire({
        title: 'Automatic Turn System',
        text: '¿ Estás seguro que desea Deshabilitar este Usuario?',
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
          this.usersService.deleteUser(id).subscribe(
            res => {
                console.log(res);
                this.getUsers();
            },
            err => console.log(err)
          );
        }
      });
    }
}
