import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
acerca_de_mi: any;
nombre: any;
apellido: any;

  constructor() { }

  ngOnInit(): void {
  }

}
