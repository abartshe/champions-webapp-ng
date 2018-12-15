import { Component, OnInit, Input } from '@angular/core';
import { Champion } from '../../models/Champion';

@Component({
  selector: 'champions-dashboard-tiles',
  templateUrl: './dashboard-tiles.component.html',
  styleUrls: ['./dashboard-tiles.component.scss']
})
export class DashboardTilesComponent implements OnInit {
  @Input() champions: Champion[];

  constructor() { }

  ngOnInit() {
  }

}
