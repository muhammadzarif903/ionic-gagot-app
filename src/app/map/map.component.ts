import {
  Component,
  NgZone,
  AfterViewInit,
  Output,
  Input,
  EventEmitter,
  ChangeDetectorRef,
  ViewChild, ElementRef, OnInit
} from '@angular/core';

import * as L from 'leaflet';
import {circle, latLng, polygon, tileLayer, TileLayer} from 'leaflet';

@Component({
  selector: 'mx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  private map;
  public options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };
  public layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...'
      }),
      'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...'
      })
    },
    overlays: {
      'Big Circle': circle([46.95, -122], {radius: 5000}),
      'Big Square': polygon([[46.8, -121.55], [46.9, -121.55], [46.9, -121.7], [46.8, -121.7]])
    }
  };

  @ViewChild('mapRef', {static: false}) mapRef: ElementRef;

  constructor(private zone: NgZone) {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnInit() {

    // The 'add' event callback handler happens outside of the Angular zone
    // this.circle.on('add', () => {
    //   // But, we can run stuff inside of Angular's zone by calling NgZone.run()
    //   // everything inside the arrow function body happens inside of Angular's zone, where changes will be detected
    //   this.zone.run(() => {
    //     this.fitBounds = this.circle.getBounds();
    //   });
    // });
  }

  private initMap(): void {
    // this.map = L.map('map', {
    //   center: [39.8282, -98.5795],
    //   zoom: 3
    // });
    // const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 18,
    //   minZoom: 3,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // });
    //
    // tiles.addTo(this.map);
  }
}
