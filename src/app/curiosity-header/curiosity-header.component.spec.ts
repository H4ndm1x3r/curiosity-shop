import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuriosityHeaderComponent } from './curiosity-header.component';

describe('CuriosityHeaderComponent', () => {
  let component: CuriosityHeaderComponent;
  let fixture: ComponentFixture<CuriosityHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuriosityHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CuriosityHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
