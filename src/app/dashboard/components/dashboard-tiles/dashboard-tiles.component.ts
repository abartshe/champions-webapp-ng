import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Character } from '../../../core/models/character';

@Component({
  selector: 'champions-dashboard-tiles',
  templateUrl: './dashboard-tiles.component.html',
  styleUrls: ['./dashboard-tiles.component.scss']
})
export class DashboardTilesComponent implements OnInit {
  @Input() characters: Character[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToCharacterPage(id: number) {
    this.router.navigate(['character/', id]);
  }

}
