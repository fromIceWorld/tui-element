import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnComponent } from './topn.component';

describe('TopnComponent', () => {
  let component: TopnComponent;
  let fixture: ComponentFixture<TopnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
