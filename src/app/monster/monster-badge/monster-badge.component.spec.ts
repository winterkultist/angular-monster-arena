import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterBadgeComponent } from './monster-badge.component';

describe('MonsterBadgeComponent', () => {
  let component: MonsterBadgeComponent;
  let fixture: ComponentFixture<MonsterBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
