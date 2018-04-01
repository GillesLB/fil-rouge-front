import { Component, OnInit, ViewChild } from '@angular/core';
import { Case } from '../../core/model';
import { CaseService } from '../../core/api/case.service';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';


@Component({
  selector: 'app-table-case',
  templateUrl: './table-case.component.html',
  styleUrls: ['./table-case.component.css']
})
export class TableCaseComponent implements OnInit {
  caseColumns = ['id', 'name', 'description'];
  caseSource;
  errText: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private caseService: CaseService) { }

  ngOnInit() {
    this.caseService.getCases().subscribe(
      cases => {
        this.caseSource = new MatTableDataSource(cases);
        this.caseSource.paginator = this.paginator;
        this.caseSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.caseSource.filter = filterValue;
  }
}


