import { Component, OnInit, Input } from '@angular/core';
import { Alumno } from 'src/app/clases/alumno';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {

  @Input() alumnoParaMostrar: Alumno;

  constructor() { }

  ngOnInit() {
  }

}
