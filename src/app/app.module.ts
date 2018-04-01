import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule } from './material.module';
import { TableCaseComponent } from './tables/table-case/table-case.component';
import { TableWeaponComponent } from './tables/table-weapon/table-weapon.component';
import { TableVehiculeComponent } from './tables/table-vehicule/table-vehicule.component';
import { TablePieceofevidenceComponent } from './tables/table-pieceofevidence/table-pieceofevidence.component';
import { PopupVehiculeComponent } from './popup/popup-vehicule/popup-vehicule.component';
import { PopupWeaponComponent } from './popup/popup-weapon/popup-weapon.component';
import { PopupPieceofevidenceComponent } from './popup/popup-pieceofevidence/popup-pieceofevidence.component';
import { VehiculeComponent } from './modules/vehicule/vehicule.component';
import { DetailVehiculeComponent } from './modules/vehicule/detail-vehicule/detail-vehicule.component';
import { TableVehiculesComponent } from './tables/table-vehicules/table-vehicules.component';
import { FormVehiculeComponent } from './modules/vehicule/form-vehicule/form-vehicule.component';
import { PopupDeleteLinkComponent } from './popup/popup-delete-link/popup-delete-link.component';
import { PieceOfEvidenceComponent } from './modules/piece-of-evidence/piece-of-evidence.component';
import { DetailPieceOfEvidenceComponent } from './modules/piece-of-evidence/detail-piece-of-evidence/detail-piece-of-evidence.component';
import { FormPieceOfEvidenceComponent } from './modules/piece-of-evidence/form-piece-of-evidence/form-piece-of-evidence.component';
import { TablePieceOfEvidenceComponent } from './tables/table-piece-of-evidence/table-piece-of-evidence.component';
import { PopupService } from './core/popup.service';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { WeaponComponent } from './modules/weapon/weapon.component';
import { DetailWeaponComponent } from './modules/weapon/detail-weapon/detail-weapon.component';
import { FormWeaponComponent } from './modules/weapon/form-weapon/form-weapon.component';
import { TableWeaponsComponent } from './tables/table-weapons/table-weapons.component';
import { CaseService } from './core/api/case.service';
import { WeaponService } from './core/api/weapon.service';
import { VehiculeService } from './core/api/vehicule.service';
import { PoeService } from './core/api/poe.service';
import { CommentService } from './core/api/comment.service';
import { AssociateWeaponComponent } from './links/associate-weapon/associate-weapon.component';
import { AssociatePieceOfEvidenceComponent } from './links/associate-piece-of-evidence/associate-piece-of-evidence.component';
import { AssociateVehiculeComponent } from './links/associate-vehicule/associate-vehicule.component';
import { PopupCreateAssociateComponent } from './popup/popup-create-associate/popup-create-associate.component';
import { PopupAssociateComponent } from './popup/popup-associate/popup-associate.component';
import { AffaireComponent } from './modules/affaire/affaire.component';
import { ExploreTablesComponent } from './modules/affaire/explore-tables/explore-tables.component';
import { MessageAffaireComponent } from './modules/affaire/message-affaire/message-affaire.component';
import { FormAffaireComponent } from './modules/affaire/form-affaire/form-affaire.component';

// décorateur et metadonnées
@NgModule({
  //  utilisés dans les templates (portée locale)
  declarations: [
    AppComponent,
    TableCaseComponent,
    TableWeaponComponent,
    TableVehiculeComponent,
    TablePieceofevidenceComponent,
    ExploreTablesComponent,
    PopupVehiculeComponent,
    PopupWeaponComponent,
    PopupPieceofevidenceComponent,
    VehiculeComponent,
    DetailVehiculeComponent,
    TableVehiculesComponent,
    FormVehiculeComponent,
    PopupDeleteLinkComponent,
    PieceOfEvidenceComponent,
    DetailPieceOfEvidenceComponent,
    FormPieceOfEvidenceComponent,
    TablePieceOfEvidenceComponent,
    AssociateVehiculeComponent,
    DashboardComponent,
    NavigationComponent,
    MessageAffaireComponent,
    WeaponComponent,
    DetailWeaponComponent,
    FormWeaponComponent,
    TableWeaponsComponent,
    FormAffaireComponent,
    AssociateWeaponComponent,
    AssociatePieceOfEvidenceComponent,
    PopupCreateAssociateComponent,
    PopupAssociateComponent,
    AffaireComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule
  ],
  entryComponents: [
    PopupVehiculeComponent,
    PopupWeaponComponent,
    PopupDeleteLinkComponent,
    PopupAssociateComponent,
    PopupCreateAssociateComponent],
  // concerne les classes récupérant / traitant les données (portée globale)
  providers: [
    HttpClientModule,
    PopupService,
    CaseService,
    WeaponService,
    VehiculeService,
    PoeService,
    CommentService,
    AffaireComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
