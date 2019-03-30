import { Component, OnInit } from '@angular/core';
import { Departments } from 'src/app/models/departments';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-motivo-turno',
  templateUrl: './motivo-turno.component.html',
  styleUrls: ['./motivo-turno.component.css']
})
export class MotivoTurnoComponent implements OnInit {
  listDepartments: Departments;
  constructor(private departmentsService: DepartmentsService) { }

  ngOnInit() {
    this.departmentsService.getdepartments()
    .subscribe(
      res => { this.listDepartments = res; },
      err => {console.log(err); }
    );
  }

}
