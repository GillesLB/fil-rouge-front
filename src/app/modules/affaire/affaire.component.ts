import { Component, OnInit } from '@angular/core';
import { PopupAssociateComponent } from '../../popup/popup-associate/popup-associate.component';
import { PopupCreateAssociateComponent } from '../../popup/popup-create-associate/popup-create-associate.component';
import { CaseService } from '../../core/api/case.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Case, Vehicule } from '../../core/model';

@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.css']
})
export class AffaireComponent implements OnInit {
  policeCase: Case;
  vehicule: Vehicule;
  errtext: string;
  editing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private caseService: CaseService,
    public dialog: MatDialog
  ) { }


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.caseService.getCase(id).subscribe(
      data => this.policeCase = data,
      err => this.errtext = 'la requête a échouée'
    );
  }

  editCase() {
    this.editing = !this.editing;
  }
  openAssociate() {
    const dialogRef = this.dialog.open(PopupAssociateComponent, {
      data: this.policeCase,
    });
  }
  openCreateAssociate() {
    const dialogRef = this.dialog.open(PopupCreateAssociateComponent, {
      data: this.policeCase,
    });
  }
}
