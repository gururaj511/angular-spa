import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaListComponent } from './spa-list.component';

describe('SpaListComponent', () => {
  let component: SpaListComponent;
  let fixture: ComponentFixture<SpaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
