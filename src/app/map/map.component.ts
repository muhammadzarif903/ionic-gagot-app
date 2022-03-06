import {
  Component,
  NgZone,
  AfterViewInit,
  ViewChild, ElementRef
} from '@angular/core';

import * as L from 'leaflet';


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

  private initMap(): void {
    const cities = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.');

    const grayscale = L.tileLayer(openStreetMapUrl,
      {
        id: 'mapRef',
        tileSize: 512,
        zoomOffset: -1,
        attribution: ''
      });
    const streets = L.tileLayer(openStreetMapUrl,
      {
        id: 'mapRef',
        tileSize: 512,
        zoomOffset: -1,
        attribution: ''
      });
    this.map = L.map('mapRef', {
      zoomControl: true,
      center: [39.8282, -98.5795],
      zoom: 2,
      layers: [grayscale, streets]
    });
    const baseMaps = {
      Grayscale: grayscale,
      Streets: streets
    };
    const overlayMaps = {
      Cities: cities
    };
    L.control.layers(baseMaps, overlayMaps).addTo(this.map);
    this.map.whenReady(() => {
      setTimeout(() => {
        this.map.invalidateSize();
      }, 100);
    });
  }
}
