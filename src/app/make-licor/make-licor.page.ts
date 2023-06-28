import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LicorService} from '../shared/licor.service';

@Component({
  selector: 'app-make-licor',
  templateUrl: './make-licor.page.html',
  styleUrls: ['./make-licor.page.scss'],
})
export class MakeLicorPage implements OnInit {

  licorForm: FormGroup;
  constructor(
    private aptService: LicorService,
    private router: Router,
    public fb: FormBuilder
  ) {}
  ngOnInit() {
    this.licorForm = this.fb.group({
      name: [''],
      country: [''],
      type: [''],
      year: [''],
      date_make: [''],
    });
  }
  formSubmit() {
    if (!this.licorForm.valid) {
      return false;
    } else {
      return this.aptService
        .createLicor(this.licorForm.value)
        .then((res) => {
          console.log(res);
          this.licorForm.reset();
          this.router.navigate(['/home']);
        })
        .catch((error) => console.log(error));
    }
  }

}
