import { Component, OnInit, ViewChild } from '@angular/core';
import { Weapon } from '../../core/model';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { WeaponService } from '../../core/api/weapon.service';
import { CaseService } from '../../core/api/case.service';
import { Case } from '../../core/model';
import { PopupService } from '../../core/popup.service';

@Component({
  selector: 'app-table-weapon',
  templateUrl: './table-weapon.component.html',
  styleUrls: ['./table-weapon.component.css']
})
export class TableWeaponComponent implements OnInit {
  id: number;
  weaponColumns = ['type', 'modele', 'createDate', 'updateDate', 'edit', 'delete'];
  policeCase: Case;
  weapon: Weapon;
  weaponSource;
  errText: string;
  data: any;

  constructor(public popupService: PopupService,
    private route: ActivatedRoute,
    private weaponService: WeaponService,
    private caseService: CaseService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.caseService.getCase(id).subscribe(
      data => this.weaponSource = new MatTableDataSource(data.weapon),
      err => this.errText = 'La requête a échouée'
    );
  }

  dialogEdit(row) { // ouverture du popup avec le contenu de la ligne en paramètre
    this.popupService.openEditWeapon(row);
  }

  dialogDeleteLink(row) {
    this.data = [this.id, row.id];
    this.popupService.openDLinkWeapon(this.data);
  }
}
