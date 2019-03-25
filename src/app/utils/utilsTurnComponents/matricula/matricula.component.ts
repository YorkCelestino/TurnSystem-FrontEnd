import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';
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
  @ViewChild ('screenValue') screenValue: ElementRef;
  submitted = false;
   mask = [ /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
   form: FormGroup;
  constructor(private fb: FormBuilder,
              private personService: PersonService,
              private router: Router
            ) { }

  ngOnInit() {
    this.form = this.fb.group({
      identificador: ['', Validators.required]
    });
    this.screenValue.nativeElement.focus();
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
    let last = this.screenValue.nativeElement.value;
    if (last.length > 7 ) {
        return;
    }
    this.screenValue.nativeElement.focus();
     this.screenValue.nativeElement.value = last + value;
  }

  /**
   * function for delete last
  */
  deleteLast() {
    // tslint:disable-next-line:prefer-const
    let last = this.screenValue.nativeElement.value;

    // tslint:disable-next-line:prefer-const
    let newValue = last.substring(0, last.length - 1);

    this.screenValue.nativeElement.value = newValue;
  }

  addPerson() {
    this.submitted = true;
    if (this.form.invalid) {
      console.log(this.form.value);
      return;
    } else {
      this.personService.saveUser(this.form.value).subscribe(
        res => {
          console.log(res);
          this.router.navigateByUrl('/turns/motivoTurno');
         },
        err => {
          console.log(err);
        }
      );
    }
  }
}
