import { Component, OnInit, ViewChild } from '@angular/core';
import { PoeService } from '../../core/api/poe.service';
import {MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-table-piece-of-evidence',
  templateUrl: './table-piece-of-evidence.component.html',
  styleUrls: ['./table-piece-of-evidence.component.css']
})
export class TablePieceOfEvidenceComponent implements OnInit {

 // tableau des colonnes dutableau affichées
 pieceOfEvidenceColumns = ['date', 'type', 'serialNumber', 'updateDate'];
 // source des informations envoyées dans le tableau
 pieceOfEvidenceSource;
 errText: string;

 // Pagination
 @ViewChild(MatPaginator) paginator: MatPaginator;
 constructor(private poeService: PoeService) { }

 ngOnInit() {
   // requête au chargement de la page
   this.poeService.getPieceOfEvidences().subscribe(
     cases => {
       this.pieceOfEvidenceSource = new MatTableDataSource(cases);
       this.pieceOfEvidenceSource.paginator = this.paginator; });

 }

 // filtre sur le tableau
 applyFilter(filterValue: string) {
   filterValue = filterValue.trim(); // Remove whitespace
   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
   this.pieceOfEvidenceSource.filter = filterValue;
 }
}
