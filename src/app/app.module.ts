import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TablaEmpleadoComponent } from './tablaEmpleado/tablaEmpleado.component';
import { ListaComponent } from './listaEmpleados/listaEmpleados.component';
import { CrearComponent } from './crearEmpleado/agregarEmpleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CrearComponent,
    TablaEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }