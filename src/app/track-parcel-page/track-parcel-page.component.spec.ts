import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackParcelPageComponent } from './track-parcel-page.component';

describe('TrackParcelPageComponent', () => {
  let component: TrackParcelPageComponent;
  let fixture: ComponentFixture<TrackParcelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackParcelPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackParcelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
