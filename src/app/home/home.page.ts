import { Component, OnInit } from '@angular/core';
import { Licor } from '../shared/Licor';
import { LicorService } from './../shared/licor.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  Licores: any = [];
  constructor(private aptService: LicorService) {}
  ngOnInit() {
    this.fetchLicor();
    let LicorRes = this.aptService.getLicorList();
    LicorRes.snapshotChanges().subscribe((res) => {
      this.Licores = [];
      res.forEach((item) => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        this.Licores.push(a as Licor);
      });
    });
  }
  fetchLicor() {
    this.aptService
      .getLicorList()
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
      });
  }
  deleteLicor(id: any) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteLicor(id);
    }
  }
}