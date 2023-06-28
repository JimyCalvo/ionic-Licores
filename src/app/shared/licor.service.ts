import { Injectable } from '@angular/core';
import { Licor } from './Licor';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class LicorService {
  licorListRef: AngularFireList<any>;
  licorRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.licorListRef = this.db.list('/licor')
  }


  // Create
  createLicor(apt: Licor) {
    return this.licorListRef.push({
      name: apt.name,
      country: apt.country,
      type: apt.type,
      year: apt.year,
      date_make: apt.date_make,
    });
  }
  // Get Single
  getLicor(id: string) {
    this.licorRef = this.db.object('/licor/' + id);
    return this.licorRef;
  }
  // Get List
  getLicorList() {
    this.licorListRef = this.db.list('/licor');
    return this.licorListRef;
  }
  // Update
  updateLicor(id: any, apt: Licor) {
    return this.licorRef.update({
      name: apt.name,
      country: apt.country,
      type: apt.type,
      year: apt.year,
      date_make: apt.date_make,
    });
  }
  // Delete
  deleteLicor(id: string) {
    this.licorRef = this.db.object('/licor/' + id);
    this.licorRef.remove();
  }
}


