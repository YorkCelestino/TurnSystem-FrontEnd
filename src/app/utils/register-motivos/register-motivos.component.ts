import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Motivos } from 'src/app/models/motivos';
import { FormBuilder, FormGroupName, FormGroup } from '@angular/forms';
import { Departments } from 'src/app/models/departments';
import { DepartmentsService } from 'src/app/services/departments.service';
import { MotivosService } from 'src/app/services/motivos.service';
declare const $: any;

@Component({
  selector: 'app-register-motivos',
  templateUrl: './register-motivos.component.html',
  styleUrls: ['./register-motivos.component.css']
})
export class RegisterMotivosComponent implements OnInit {
  @Input() motivo: Motivos;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  public form: FormGroup;
  listaNombreDepartamento: Departments;
  constructor(private fb: FormBuilder, private departmentsService: DepartmentsService, private motivosService: MotivosService) { }
  ngOnInit() {
    $('#motivoModal').modal('show');
    $('#motivoModal').on('hidden.bs.modal', this.closed);
    this.getDepartments();
  }

  closed() {
    // console.log('is closed')
    this.onClose.emit({status: 'closed'});
  }
  getDepartments( ) {
    this.departmentsService.getdepartments()
    .subscribe(
      res => {
        this.listaNombreDepartamento = res;
        this.setForm();
      },
      err => console.error(err)
    );
  }
  setForm() {
    this.form = this.fb.group({
      id_Motivo : [''],
      descripcion: [''],
      id_Departamento: ['', this.listaNombreDepartamento[0].id_Departamento],
      nombreDepartamento: ['']
  });
  }
    saveMotivo() {
         this.motivosService.saveMotivo(this.form.value).subscribe(
            res => {
              console.log(res);
              console.log(this.form.value);
            },
            err => console.error(err)
          );
    }

}
