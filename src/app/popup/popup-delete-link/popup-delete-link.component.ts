import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PoeService } from '../../core/api/poe.service';
import { VehiculeService } from '../../core/api/vehicule.service';
import { WeaponService } from '../../core/api/weapon.service';
import { Vehicule, Weapon, PieceOfEvidence, Case } from '../../core/model';
import { CaseService } from '../../core/api/case.service';
import { NgForm } from '@angular/forms';
import { TableVehiculeComponent } from '../../tables/table-vehicule/table-vehicule.component';
import { TableWeaponComponent } from '../../tables/table-weapon/table-weapon.component';


@Component({
  selector: 'app-popup-delete-link',
  templateUrl: './popup-delete-link.component.html',
  styleUrls: ['./popup-delete-link.component.css']
})
export class PopupDeleteLinkComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupDeleteLinkComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private vehiculeService: VehiculeService,
    private weaponService: WeaponService) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  deleteLink() {
    this.vehiculeService.deleteVehiculeLink(this.data).subscribe();
    this.weaponService.deleteWeaponLink(this.data).subscribe();
    this.close();
  }
}
