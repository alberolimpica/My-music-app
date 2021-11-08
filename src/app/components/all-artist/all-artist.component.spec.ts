import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArtistComponent } from './all-artist.component';

describe('AllArtistComponent', () => {
  let component: AllArtistComponent;
  let fixture: ComponentFixture<AllArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
