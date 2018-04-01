import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { DetailPieceOfEvidenceComponent } from './modules/piece-of-evidence/detail-piece-of-evidence/detail-piece-of-evidence.component';

@Component({
  selector: 'app-root',
  template: '<app-navigation></app-navigation>'
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('sidenav') private sidenav: MatSidenav;

  ngOnInit() {
    this.sidenav.open();
  }
}
