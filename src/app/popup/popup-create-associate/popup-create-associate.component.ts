import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Case } from '../../core/model';

@Component({
  selector: 'app-popup-create-associate',
  templateUrl: './popup-create-associate.component.html',
  styleUrls: ['./popup-create-associate.component.css']
})
export class PopupCreateAssociateComponent implements OnInit {
  sections = ['Pièces à conviction', 'Armes', 'Véhicules'];
  selectedCreate;
  policeCase: Case;

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.policeCase = this.data;
   }

}
