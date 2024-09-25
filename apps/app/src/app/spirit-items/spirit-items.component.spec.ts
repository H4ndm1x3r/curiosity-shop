import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpiritItemsComponent } from './spirit-items.component';

describe('SpiritItemsComponent', () => {
  let component: SpiritItemsComponent;
  let fixture: ComponentFixture<SpiritItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpiritItemsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpiritItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
