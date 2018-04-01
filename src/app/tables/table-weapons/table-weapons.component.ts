import { Component, OnInit, ViewChild } from '@angular/core';
import { WeaponService } from '../../core/api/weapon.service';
import { MatTableDataSource, MatPaginator, MatIconRegistry, MatSort } from '@angular/material';

@Component({
  selector: 'app-table-weapons',
  templateUrl: './table-weapons.component.html',
  styleUrls: ['./table-weapons.component.css']
})

export class TableWeaponsComponent implements OnInit {
  // différentes colonnes du tableau
  weaponColumns = ['createDate', 'type', 'modele', 'updateDate'];
  // infos envoyées dans le tableau
  weaponSource;
  errText: string;

  // mise en page : nb éléments par page
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // mise en page : tri des éléments dans chaque colonne
  @ViewChild(MatSort) sort: MatSort;

  constructor(private weaponService: WeaponService) { }

  ngOnInit() {
    // requête au chargement de la page
    this.weaponService.getWeapons().subscribe(
      cases => {
        this.weaponSource = new MatTableDataSource(cases);
        this.weaponSource.paginator = this.paginator;
        this.weaponSource.sort = this.sort;
      });
  }

  // recherche dans le tableau
  applyFilter(filterValue: string) {
    // enleve les espaces dans les string
    filterValue = filterValue.trim();
    // passe tout en minuscule
    filterValue = filterValue.toLowerCase();
    this.weaponSource.filter = filterValue;
  }
}
