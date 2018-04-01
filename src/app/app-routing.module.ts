import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './core/navigation/navigation.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { VehiculeComponent } from './modules/vehicule/vehicule.component';
import { DetailVehiculeComponent } from './modules/vehicule/detail-vehicule/detail-vehicule.component';
import { FormVehiculeComponent } from './modules/vehicule/form-vehicule/form-vehicule.component';
import { PieceOfEvidenceComponent } from './modules/piece-of-evidence/piece-of-evidence.component';
import { DetailPieceOfEvidenceComponent } from './modules/piece-of-evidence/detail-piece-of-evidence/detail-piece-of-evidence.component';
import { FormPieceOfEvidenceComponent } from './modules/piece-of-evidence/form-piece-of-evidence/form-piece-of-evidence.component';
import { WeaponComponent } from './modules/weapon/weapon.component';
import { DetailWeaponComponent } from './modules/weapon/detail-weapon/detail-weapon.component';
import { FormWeaponComponent } from './modules/weapon/form-weapon/form-weapon.component';
import { AffaireComponent } from './modules/affaire/affaire.component';
import { FormAffaireComponent } from './modules/affaire/form-affaire/form-affaire.component';

// router table
const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'newaffaire', component: FormAffaireComponent},
    {path: 'affaires/:id', component: AffaireComponent},
    {path: 'vehicules', component: VehiculeComponent},
    {path: 'vehicules/:id', component: DetailVehiculeComponent,
      children: [{path: 'edit', component: FormVehiculeComponent}]},
    {path: 'newvehicule', component: FormVehiculeComponent},
    {path: 'pieceOfEvidence', component: PieceOfEvidenceComponent},
    {path: 'pieceOfEvidence/:id', component: DetailPieceOfEvidenceComponent,
      children: [{path: 'edit', component: FormPieceOfEvidenceComponent}]},
    {path: 'newpieceOfEvidence', component: FormPieceOfEvidenceComponent},
    {path: 'weapons', component: WeaponComponent},
    {path: 'weapons/:id', component: DetailWeaponComponent,
      children: [{path: 'edit', component: FormWeaponComponent}]},
    {path: 'newweapon', component: FormWeaponComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
