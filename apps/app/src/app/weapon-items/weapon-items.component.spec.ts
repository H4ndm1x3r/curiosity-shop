import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeaponItemsComponent } from './weapon-items.component';

describe('WeaponItemsComponent', () => {
  let component: WeaponItemsComponent;
  let fixture: ComponentFixture<WeaponItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponItemsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeaponItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
