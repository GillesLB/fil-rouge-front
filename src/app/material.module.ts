// import des Modules Angular Material vers app-module.ts

import { NgModule } from '@angular/core';
import {
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSortModule,
    MatRadioModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
    declarations: [
    ],
    imports: [
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTableModule,
        MatTabsModule,
        MatDialogModule,
        MatListModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        CdkTableModule,
        MatTooltipModule,
        MatSortModule,
        MatRadioModule
    ],
    exports: [
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTableModule,
        MatTabsModule,
        MatDialogModule,
        MatListModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        CdkTableModule,
        MatTooltipModule,
        MatSortModule,
        MatRadioModule
    ],
  })
  export class MaterialModule { }
