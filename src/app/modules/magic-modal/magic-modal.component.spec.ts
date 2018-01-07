import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicModalComponent } from './magic-modal.component';

describe('MagicModalComponent', () => {
  let component: MagicModalComponent;
  let fixture: ComponentFixture<MagicModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
