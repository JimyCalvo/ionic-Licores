import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { LicorService } from './../shared/licor.service';
@Component({
  selector: 'app-edit-licor',
  templateUrl: './edit-licor.page.html',
  styleUrls: ['./edit-licor.page.scss'],
})
export class EditLicorPage implements OnInit {
  updateLicorForm: FormGroup;
  id: any;
  constructor(
    private aptService: LicorService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getLicor(this.id).valueChanges().subscribe(res => {
      this.updateLicorForm.setValue(res);
    });
  }
  ngOnInit() {
    this.updateLicorForm = this.fb.group({
      name: [''],
      country: [''],
      type: [''],
      year: [''],
      date_make: [''],
    })
    console.log(this.updateLicorForm.value)
  }
  updateForm() {
    this.aptService.updateLicor(this.id, this.updateLicorForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}