import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { GpsService } from '../services/gps.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.html',
  styleUrls: ['./map.scss'],
})
export class MapComponent implements OnInit {
  map!: L.Map;
  marker!: L.Marker;

  constructor(private gps: GpsService) {}

  ngOnInit() {
    console.log('MapComponent ngOnInit called');

    this.fixLeafletIcons();

    // Inicializar mapa
    this.map = L.map('map').setView([4.8161, -75.6855], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);

    // Marcador inicial
    this.marker = L.marker([4.8161, -75.6855]).addTo(this.map);

    // Escuchar datos en tiempo real
    this.gps.getGpsData().subscribe({
      next: (data) => {
        console.log('GPS data:', data);
        this.marker.setLatLng([data.lat, data.lon]);
        // No centramos automáticamente para que el usuario pueda mover el mapa
      },
      error: (err) => console.error('Firebase error:', err),
    });
  }

  // Función para centrar mapa en marcador
  centerOnMarker() {
    if (this.map && this.marker) {
      this.map.setView(this.marker.getLatLng(), this.map.getZoom(), {
        animate: true,
      });
    }
  }

  // Corregir iconos de Leaflet
  fixLeafletIcons() {
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png',
    });
  }
}
