import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleConnectorComponent } from './google-connector.component';

describe('GoogleConnectorComponent', () => {
  let component: GoogleConnectorComponent;
  let fixture: ComponentFixture<GoogleConnectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleConnectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
