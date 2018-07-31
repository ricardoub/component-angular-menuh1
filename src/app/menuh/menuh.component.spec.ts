import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhComponent } from './menuh.component';

describe('MenuhComponent', () => {
  let component: MenuhComponent;
  let fixture: ComponentFixture<MenuhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
