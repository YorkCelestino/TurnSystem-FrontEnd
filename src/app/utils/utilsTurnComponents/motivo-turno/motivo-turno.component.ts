import { Component, OnInit, Input } from '@angular/core';
import { Motivos } from 'src/app/models/motivos';
import { MotivosService } from 'src/app/services/motivos.service';
import { Departments } from 'src/app/models/departments';
import { TurnsService } from 'src/app/services/turns.service';
import { Turns } from 'src/app/models/turns';

@Component({
  selector: 'app-motivo-turno',
  templateUrl: './motivo-turno.component.html',
  styleUrls: ['./motivo-turno.component.css']
})
export class MotivoTurnoComponent implements OnInit {
  listMotivo: Motivos;
  constructor(private motivosService: MotivosService, protected turnsService: TurnsService) { }

  @Input() department: Departments;

  ngOnInit() {
    this.getMotivos();
  }

  getMotivos() {
    console.log(this.department.id_Departamento );
    this.motivosService.getMotivo(this.department.id_Departamento)
    .subscribe(
      res => {
        this.listMotivo = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  setTurno(motivos: any) {
      delete motivos.descripcion;
      delete motivos.id_Departamento;
      this.turnsService.saveTurn(motivos)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.error(err);
        }
      );
  }

}
