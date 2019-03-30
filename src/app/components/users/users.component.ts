import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/users';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  /*users array*/
  users: any = [];
  selected: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private usersService: UsersService,
              private activatedRoute: ActivatedRoute
    ) {
  }

  toggleModal (data: any) {
    this.selected = data;
    console.log(this.selected);
  }

  ngOnInit () {
    this.dtOptions = {
      pagingType: 'full_numbers',
      // pageLength: 5,
       retrieve: true,
      // paging: false
    };
    this.getUsers();
  }

    /*getting users*/
    getUsers() {
      this.usersService.getUsers().subscribe(
        res => {
          this.users = res;
          // Calling the DT trigger to manually render the table
          this.dtTrigger.next();
        },
        err => console.error(err)
      );
    }

    changeStatus() {
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

          this.usersService.changeStatusUser(this.users.id_Usuario).subscribe(
              res => {
                console.log(res);
                Swal.fire(
                  'Automatic Turn System!',
                  '¡Deshabilitado con éxito!',
                  'success'
                );
                this.getUsers();

            },
            err => { console.log(err); }
          );
        }
      });
    }
}
