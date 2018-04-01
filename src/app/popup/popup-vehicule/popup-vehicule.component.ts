import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Vehicule } from '../../core/model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-popup-vehicule',
  templateUrl: './popup-vehicule.component.html',
  styleUrls: ['./popup-vehicule.component.css']
})
export class PopupVehiculeComponent implements OnInit {
  vehicule;

// injection du contenu de la ligne sélectionnée(data)
  constructor(
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.vehicule = this.data;
  }
}
