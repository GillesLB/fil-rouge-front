import { Component, OnInit, Input } from '@angular/core';
import { PopupAssociateComponent } from '../../popup/popup-associate/popup-associate.component';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Weapon, Case } from '../../core/model';
import { CaseService } from '../../core/api/case.service';


@Component({
  selector: 'app-associate-weapon',
  templateUrl: './associate-weapon.component.html',
  styleUrls: ['./associate-weapon.component.css']
})
export class AssociateWeaponComponent implements OnInit {
  weapon: Weapon;

  @Input() policeCase: Case;
  constructor(
    public dialogRef: MatDialogRef<PopupAssociateComponent>,
    private caseService: CaseService) {}

  ngOnInit() {
    this.weapon = {
      type: '',
      modele: '',
      createDate: null,
      updateDate: null
    };
  }

  onSubmit(ngForm: NgForm) {
    this.policeCase.weapon.push(ngForm.value);
    this.caseService.associateCaseItem(this.policeCase).subscribe();
    this.dialogRef.close();
  }
}
