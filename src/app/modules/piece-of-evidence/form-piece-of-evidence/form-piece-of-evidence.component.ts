import { Component, OnInit } from '@angular/core';
import { PieceOfEvidence } from '../../../core/model';
import { NgForm } from '@angular/forms';
import { PoeService } from '../../../core/api/poe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-piece-of-evidence',
  templateUrl: './form-piece-of-evidence.component.html',
  styleUrls: ['./form-piece-of-evidence.component.css']
})
export class FormPieceOfEvidenceComponent implements OnInit {

  pieceOfEvidence: PieceOfEvidence;
  editing: boolean;

  constructor(private pieceOfEvidenceService: PoeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // récupération du path
    const urlSegment = this.route.snapshot.url[0];
    // mode edit en fonction de l'uri
    if (urlSegment && urlSegment.path === 'edit') {
      // récupération de l'ID de la pièce à conviction
      const id = +this.route.parent.snapshot.paramMap.get('id');
      // récupération de l'objet pièce à conviction
      this.pieceOfEvidenceService.getPieceOfEvidence(id).subscribe(
        data => this.pieceOfEvidence = data);
      this.editing = true;
    } else {
      // mode création
      this.editing = false;
      this.pieceOfEvidence = {
        type: '',
        serialNumber: '',
        createDate: null,
        updateDate: null,
        // listCase:  [],
      };
    }
  }

  // création de la pièce à conviction
  onSubmit(form: NgForm) {
    if (this.editing) {
        this.pieceOfEvidenceService.updatePieceOfEvidence(this.pieceOfEvidence).subscribe();
    } else {
    this.pieceOfEvidenceService.createPieceOfEvidence(this.pieceOfEvidence).subscribe();
    this.router.navigate(['/pieceOfEvidence']);
    }
  }
}
