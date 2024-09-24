import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VitalityItemsComponent } from './vitality-items.component';

describe('VitalityItemsComponent', () => {
  let component: VitalityItemsComponent;
  let fixture: ComponentFixture<VitalityItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitalityItemsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VitalityItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
