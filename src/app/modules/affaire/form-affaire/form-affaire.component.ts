import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Case } from '../../../core/model';
import { CaseService } from '../../../core/api/case.service';

@Component({
  selector: 'app-form-affaire',
  templateUrl: './form-affaire.component.html',
  styleUrls: ['./form-affaire.component.css']
})
export class FormAffaireComponent implements OnInit {
  policeCase: Case;
  editing: boolean;

  constructor(
    private caseService: CaseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // récupération du path
    const urlSegment = this.route.snapshot.url[0];
    // mode edit en fonction de l'URI
    if (urlSegment && urlSegment.path === 'affaires') {
      this.editing = true;
      // récupération de l'ID de l'affaire
      const id = +this.route.snapshot.paramMap.get('id');
      // récupération de l'affaire
      this.caseService.getCase(id).subscribe(
        data => this.policeCase = data);
    } else {
      // mode création
      this.editing = false;
      this.policeCase = {
        date: null,
        name: '',
        description: '',
        listComment: [],
        listUser: [],
        listPhoto: [],
        pieceOfEvidence: [],
        listVictim: [],
        listSuspect: [],
        listWitness: [],
        weapon: [],
        vehicule: [],
        listTag: [],
      };
    }
  }

  // création de l'affaire
  onSubmit(form: NgForm) {
    if (this.editing) {
        this.caseService.updateCase(this.policeCase).subscribe();
    } else {
    this.caseService.createAffaire(this.policeCase).subscribe();
    this.router.navigate(['']);
    }
  }
}
