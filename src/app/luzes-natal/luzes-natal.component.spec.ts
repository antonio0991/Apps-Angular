import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuzesNatalComponent } from './luzes-natal.component';

describe('LuzesNatalComponent', () => {
  let component: LuzesNatalComponent;
  let fixture: ComponentFixture<LuzesNatalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuzesNatalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuzesNatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
