import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditLicorPage } from './edit-licor.page';

describe('EditLicorPage', () => {
  let component: EditLicorPage;
  let fixture: ComponentFixture<EditLicorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditLicorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
