import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { Geo } from '../geo';

@Component({
  selector: 'app-geo',
  styles: ['agm-map { height: 200px; width: 100%; }'],
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit {

  @Input() geo: Geo;

  constructor() { }

  ngOnInit() {
  }

}
