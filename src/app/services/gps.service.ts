import { Injectable } from '@angular/core';
import { Database, ref, onValue } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GpsService {
  constructor(private db: Database) {}

  getGpsData(): Observable<any> {
    return new Observable((observer) => {
      const deviceRef = ref(this.db, 'devices/esp32_1');
      onValue(deviceRef, (snapshot) => observer.next(snapshot.val()));
    });
  }
}
