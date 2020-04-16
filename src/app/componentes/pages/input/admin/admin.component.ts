import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/clases/alumno';
import { Profesor } from 'src/app/clases/profesor';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  title = 'Ejemplo  @Input()  @Output()  ';

  /**Atributos */
  listadoPrincipal: Alumno[];
  alumnoSeleccionado: Alumno;
  profesorParaMostrar: Profesor;
  ListadoProfesoresPrincipal: Profesor[];


  /*Constructor*/
  constructor() {

    this.profesorParaMostrar = new Profesor("Clementina", "Programacion", 777);
    this.listadoPrincipal = [
      { apellido: 'Aguas', nombre: "rogelio", legajo: 666 },
      { apellido: 'Mercurio', nombre: "Alfredo", legajo: 333 }
    ];

    this.ListadoProfesoresPrincipal = [
      { apellido: "Alvarez", materia: "matematicas", legajo: 666 },
      { apellido: "Villagran", materia: "prog 1", legajo: 333 }
    ];

  }



  /*Funciones*/
  tomarAlumnoCreado(NuevoAlumno: Alumno) {
    this.listadoPrincipal.push(NuevoAlumno);
  }


  tomarAlumnoParaDetalles(NuevoAlumno: Alumno) {
    this.alumnoSeleccionado = NuevoAlumno;
  }


  tomarProfesorParaDetalles(NuevoProfe: Profesor) {
    this.profesorParaMostrar = NuevoProfe;
  }


  mostrarProfesor(parametroProfesor: Profesor) {
    console.info("profesor", parametroProfesor);
    //this.profesorParaMostrar=parametroProfesor;
    this.ListadoProfesoresPrincipal.push(parametroProfesor);
  }


}
