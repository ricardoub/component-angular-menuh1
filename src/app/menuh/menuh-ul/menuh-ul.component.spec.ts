import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhUlComponent } from './menuh-ul.component';

describe('MenuhUlComponent', () => {
  let component: MenuhUlComponent;
  let fixture: ComponentFixture<MenuhUlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuhUlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuhUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
