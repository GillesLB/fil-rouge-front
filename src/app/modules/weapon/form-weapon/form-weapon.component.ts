import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Weapon } from '../../../core/model';
import { WeaponService } from '../../../core/api/weapon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-weapon',
  templateUrl: './form-weapon.component.html',
  styleUrls: ['./form-weapon.component.css']
})
export class FormWeaponComponent implements OnInit {
  weapon: Weapon;
  editing: boolean;

  @Input() w: Weapon;

  constructor(private weaponService: WeaponService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    const urlSegment = this.route.snapshot.url[0]; // récupération du path
    if (urlSegment && urlSegment.path === 'edit') { // mode edit en fonction de l'URL
      const id = +this.route.parent.snapshot.paramMap.get('id'); // récupération de l'ID du vehicule
      this.weaponService.getWeapon(id).subscribe( // récupération de l'objet véhicule
        data => this.weapon = data);
      this.editing = true;
    } else {
      this.editing = false; // mode création (formulaire vide)
      this.weapon = {
        createDate: '',
        type: '',
        modele: '',
        updateDate: '',
      };
    }
  }

  onSubmit(form: NgForm) { // création ou modification de l'arme
    if (this.editing) {
      this.weaponService.updateWeapon(this.weapon).subscribe(); // édition
    } else {
      this.weaponService.createWeapon(this.weapon).subscribe(); // création
      this.router.navigate(['/weapons']);
   }
  }
}

