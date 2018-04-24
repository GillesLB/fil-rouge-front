import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { WeaponService } from '../../../core/api/weapon.service';


@Component({
  selector: 'app-detail-weapon',
  templateUrl: './detail-weapon.component.html',
  styleUrls: ['./detail-weapon.component.css']
})
export class DetailWeaponComponent implements OnInit {
  id: number;
  weapon: Weapon;
  errText: string;

  constructor(private weaponService: WeaponService, private route: ActivatedRoute, private router: Router) { }

  /* initialise le component / la directive
  * après qu'Angular ait valorisé @Input */
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id'); // récupération de l'ID (dans l'URL)
    this.weaponService.getWeapon(this.id) // récupération de l'arme
    .subscribe(data =>
      this.weapon = data,
      error => this.errText = 'la requête a échouée');
    this.weaponService.weapon = this.weapon;
  }

  backToList() { // retour à la liste
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  delete() { // supprime l'arme et retour accueil
    this.weaponService.deleteWeapon(this.id)
    .subscribe( () =>
      this.router.navigate(['../'], { relativeTo: this.route }));
  }
}
