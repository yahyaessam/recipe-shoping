import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YahyaComponent } from './yahya.component';

describe('YahyaComponent', () => {
  let component: YahyaComponent;
  let fixture: ComponentFixture<YahyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YahyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YahyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
