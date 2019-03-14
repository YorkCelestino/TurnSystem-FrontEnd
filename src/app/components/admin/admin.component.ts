import { Component, OnInit, Inject } from '@angular/core';
import { UserServiceLogin } from '../../auth/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DOCUMENT } from '@angular/common';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userInfo: any ;
  elem: any;
  constructor(private userServiceLogin: UserServiceLogin,
              private userService: UsersService,
              private router: Router,
             // property for put full screen
             @Inject(DOCUMENT) private document: any) {

               console.log('started');
               this.getUser();
              }

  ngOnInit() {

    this.elem = document.documentElement;

    // call user logged in
  }

  /**
   * function of full screen
   */
  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  /**
   * info of user
   */
  getUser() {
    this.userService.getUser().subscribe(
      res => {
        this.userInfo = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  /**
   * function out of system
  */
  onLogout() {
    Swal.fire({
      title: '¿Estás seguro que desea salir del Sistema?',
      // text: 'You won\'t be able to revert this!',
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.userServiceLogin.deleteToken();
        this.router.navigate(['/login']);
      }
    });

  }

}
