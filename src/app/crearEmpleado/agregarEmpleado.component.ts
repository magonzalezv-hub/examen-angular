import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agragarEmpleado',
  templateUrl: './agregarEmpleado.component.html',
  styleUrls: ['./agregarEmpleado.component.css']
})
export class CrearComponent implements OnInit {

  forma: FormGroup;
  nombre: FormControl;
  apellidoPaterno: FormControl;
  apellidoMaterno: FormControl;
  email: FormControl;

  constructor(

  ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.nombre = new FormControl('', [Validators.required, Validators.minLength(2)] );
    this.apellidoPaterno = new FormControl('', [Validators.required, Validators.minLength(2)] );
    this.apellidoMaterno = new FormControl('', [Validators.required, Validators.minLength(2)] );
    this.email = new FormControl('', [Validators.required, Validators.email] );
  }

  createForm(){
    this.forma = new FormGroup({
      nombre: this.nombre,
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      email: this.email
    });
  }

  enviar() {

    if ( this.forma.valid ) {

      const usuario: any = {
        "id": String( Math.floor(Math.random() * (1000 - 1)) + 1 ),
        "data": {
            "nombre": this.forma.value.nombre,
            "apellidoPaterno": this.forma.value.apellidoPaterno,
            "apellidoMaterno": this.forma.value.apellidoMaterno,
            "email": this.forma.value.email
        }
      };
    }
  }
}