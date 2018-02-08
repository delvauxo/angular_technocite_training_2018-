import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloShadowComponent } from './hello-shadow.component';

describe('HelloShadowComponent', () => {
  let component: HelloShadowComponent;
  let fixture: ComponentFixture<HelloShadowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloShadowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
