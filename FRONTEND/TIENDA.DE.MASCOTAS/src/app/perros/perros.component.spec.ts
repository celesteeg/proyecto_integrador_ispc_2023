import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerrosComponent } from './perros.component';

describe('PerrosComponent', () => {
  let component: PerrosComponent;
  let fixture: ComponentFixture<PerrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
