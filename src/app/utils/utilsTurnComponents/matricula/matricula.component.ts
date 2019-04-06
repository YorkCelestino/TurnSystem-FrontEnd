import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
 export class MatriculaComponent implements OnInit {
   buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  submitted = false;
  // mask = [ /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
   form: FormGroup;
  constructor(private fb: FormBuilder,
              private personService: PersonService,
              private router: Router
            ) { }

  ngOnInit() {
    this.form = this.fb.group({
      identificador: ['', Validators.required]
    });
  }

   // convenience getter for easy access to form fields
   public get  f(): any {
    return this.form.controls;
   }

 /**
 * function for only numbers
 */
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    // tslint:disable-next-line:prefer-const
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
     // invalid character, prevent input
      event.preventDefault();
    }
  }

 /**
 * function for put number in the input matricula
 */
  buttonsValues(value: number) {
    // tslint:disable-next-line:prefer-const
    let last = this.form.value.identificador;
    if (last.length > 7 ) {
        return;
    }
  // this.screenValue.nativeElement.focus();
     this.form.patchValue({
       identificador: last + value
     });
  }

  /**
   * function for delete last
  */
  deleteLast() {
    // tslint:disable-next-line:prefer-const
    let last = this.form.value.identificador;

    // tslint:disable-next-line:prefer-const
    let newValue = last.substring(0, last.length - 1);

    this.form.patchValue({
      identificador: newValue
    });
  }

  addPerson() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      this.personService.saveUser(this.form.value).subscribe(
        res => {
          console.log(res);
          this.router.navigateByUrl('/turns/departmentTurno');
         },
        err => {
          console.log(err);
        }
      );
    }
  }
}
