import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Departments } from 'src/app/models/departments';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-turno',
  templateUrl: './department-turno.component.html',
  styleUrls: ['./department-turno.component.css']
})
export class DepartmentTurnoComponent implements OnInit {

  listDepartments: Departments;
  selected: Departments;

  constructor(private departmentsService: DepartmentsService,
              private router: Router
    ) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments() {
      this.departmentsService.getdepartments()
      .subscribe(
        res => { this.listDepartments = res; },
        err => console.log(err)
      );
  }

   setDepartment(department: any) {
     this.selected = department;
    // console.log(this.selected);
    // this.router.navigateByUrl('turns/motivoTurno');
   }
}
