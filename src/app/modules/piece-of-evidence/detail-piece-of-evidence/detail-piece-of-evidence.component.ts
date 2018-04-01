import { Component, OnInit } from '@angular/core';
import { PieceOfEvidence } from '../../../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseService } from '../../../core/api/case.service';
import { PoeService } from '../../../core/api/poe.service';

@Component({
  selector: 'app-detail-piece-of-evidence',
  templateUrl: './detail-piece-of-evidence.component.html',
  styleUrls: ['./detail-piece-of-evidence.component.css']
})
export class DetailPieceOfEvidenceComponent implements OnInit {

  id: number;
  pieceOfEvidence: PieceOfEvidence;
  errText: string;

  constructor(private route: ActivatedRoute,
     private poeService: PoeService,
     private router: Router,
     private caseService: CaseService) {
   }

  ngOnInit() {
    // récupération de l'ID dans l'URL
    this.id = +this.route.snapshot.paramMap.get('id');
    // récupération de l'objet pièce à conviction
    this.poeService.getPieceOfEvidence(this.id).subscribe(
      data => this.pieceOfEvidence = data,
      error => this.errText = 'la requête a échouée');
  }


  // retour au tableau des pièces à conviction
  backToList() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  // suppression de la pièce à conviction
  delete() {
    this.poeService.deletePieceOfEvidence(this.id).subscribe( () =>
      this.router.navigate(['../'], {relativeTo: this.route}));
  }
}

