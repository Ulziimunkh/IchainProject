import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTempComponent } from './navigation-temp.component';

describe('NavigationTempComponent', () => {
  let component: NavigationTempComponent;
  let fixture: ComponentFixture<NavigationTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
