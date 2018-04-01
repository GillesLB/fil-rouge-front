import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Weapon } from '../../core/model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-popup-weapon',
  templateUrl: './popup-weapon.component.html',
  styleUrls: ['./popup-weapon.component.css']
})
export class PopupWeaponComponent implements OnInit {
  weapon;

  // injection du contenu de la ligne sélectionnée (data)
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.weapon = this.data;
  }
}
