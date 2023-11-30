import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alert1Page } from './alert1.page';

describe('Alert1Page', () => {
  let component: Alert1Page;
  let fixture: ComponentFixture<Alert1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alert1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
