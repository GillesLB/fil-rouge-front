import { Component, OnInit, ViewChild } from '@angular/core';
import { VehiculeService } from '../../core/api/vehicule.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-table-vehicules',
  templateUrl: './table-vehicules.component.html',
  styleUrls: ['./table-vehicules.component.css']
})
export class TableVehiculesComponent implements OnInit {
  // tableau des colonnes dutableau affichées
  vehiculeColumns = ['date', 'model', 'marque', 'color', 'licensePlate', 'updateDate'];
  // source des informations envoyées dans le tableau
  vehiculeSource;
  errText: string;

  // Pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private vehiculeService: VehiculeService) { }

  ngOnInit() {
    // requête au chargement de la page
    this.vehiculeService.getVehicules().subscribe(
      cases => {
        this.vehiculeSource = new MatTableDataSource(cases);
        this.vehiculeSource.paginator = this.paginator;
        this.vehiculeSource.sort = this.sort;
         });
  }

  // filtre sur le tableau
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.vehiculeSource.filter = filterValue;
  }
}
