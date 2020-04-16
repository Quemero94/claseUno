import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { AdminComponent } from './componentes/pages/input/admin/admin.component';
import { DetalleAlumnoComponent } from './componentes/pages/input/detalle-alumno/detalle-alumno.component';
import { FormAlumnoComponent } from './componentes/pages/input/form-alumno/form-alumno.component';
import { TablaAlumnoComponent } from './componentes/pages/input/tabla-alumno/tabla-alumno.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    DetalleAlumnoComponent,
    FormAlumnoComponent,
    TablaAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
