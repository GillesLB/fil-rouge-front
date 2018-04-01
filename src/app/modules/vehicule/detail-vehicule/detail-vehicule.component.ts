import { Component, OnInit} from '@angular/core';
import { Vehicule } from '../../../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeService } from '../../../core/api/vehicule.service';
import { CaseService } from '../../../core/api/case.service';

@Component({
  selector: 'app-detail-vehicule',
  templateUrl: './detail-vehicule.component.html',
  styleUrls: ['./detail-vehicule.component.css']
})
export class DetailVehiculeComponent implements OnInit {
  id: number;
  vehicule: Vehicule;
  errText: string;

  constructor(private route: ActivatedRoute,
     private vehiculeService: VehiculeService,
     private router: Router) {
   }

  ngOnInit() {
    // récupération de l'ID dans l'URL
    this.id = +this.route.snapshot.paramMap.get('id');
    // récupération de l'objet véhicule
    this.vehiculeService.getVehicule(this.id).subscribe(
      data => this.vehicule = data,
      error => this.errText = 'la requête a échouée');
  }

  // retour au tableau des véhicules
  backToList() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  // suppression du véhicule
  delete() {
    this.vehiculeService.deleteVehicule(this.id).subscribe( () =>
      this.router.navigate(['../'], {relativeTo: this.route}));
  }
}
