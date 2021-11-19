import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayercontainerComponent } from './playercontainer.component';

describe('PlayercontainerComponent', () => {
  let component: PlayercontainerComponent;
  let fixture: ComponentFixture<PlayercontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayercontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayercontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
