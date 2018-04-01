import { Component, OnInit } from '@angular/core';
import { PieceOfEvidence } from '../../core/model';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '../../core/api/case.service';
import { Case } from '../../core/model';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-table-pieceofevidence',
  templateUrl: './table-pieceofevidence.component.html',
  styleUrls: ['./table-pieceofevidence.component.css']
})
export class TablePieceofevidenceComponent implements OnInit {
  pieceOfEvidenceColumns = ['id', 'createDate', 'type', 'serialNumber', 'edit', 'delete'];
  pieceOfEvidenceSource;


  constructor(private route: ActivatedRoute, private caseService: CaseService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.caseService.getCase(id).subscribe(
      data => this.pieceOfEvidenceSource = new MatTableDataSource(data.pieceOfEvidence));

  }

}


