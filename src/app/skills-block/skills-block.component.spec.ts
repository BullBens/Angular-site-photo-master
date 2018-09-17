import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBlockComponent } from './skills-block.component';

describe('SkillsBlockComponent', () => {
  let component: SkillsBlockComponent;
  let fixture: ComponentFixture<SkillsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
