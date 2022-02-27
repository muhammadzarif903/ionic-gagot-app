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

const openStreetMapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const openCycleMapUrl = 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png';

@Component({
  selector: 'mx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  private map: L.Map;
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
    const cities = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
      denver = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
      aurora = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
      golden = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

    const grayscale = L.tileLayer(openStreetMapUrl, {id: 'mapRef', tileSize: 512, zoomOffset: -1, attribution: ''});
    const streets = L.tileLayer(openStreetMapUrl, {id: 'mapRef', tileSize: 512, zoomOffset: -1, attribution: ''});
    this.map = L.map('mapRef', {
      zoomControl: true,
      center: [39.8282, -98.5795],
      zoom: 5,
      layers: [grayscale, streets]
    });
    const baseMaps = {
      "Grayscale": grayscale,
      "Streets": streets
    };
    const overlayMaps = {
      "Cities": cities
    };
    L.control.layers(baseMaps, overlayMaps).addTo(this.map);
    this.map.invalidateSize();
  }
}
