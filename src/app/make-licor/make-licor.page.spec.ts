import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeLicorPage } from './make-licor.page';

describe('MakeLicorPage', () => {
  let component: MakeLicorPage;
  let fixture: ComponentFixture<MakeLicorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MakeLicorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
