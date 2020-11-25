import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceRobotComponent } from './place-robot.component';

describe('PlaceRobotComponent', () => {
  let component: PlaceRobotComponent;
  let fixture: ComponentFixture<PlaceRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceRobotComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be valid', () => {
    component.placeForm.controls['xValue'].setValue('2');
    component.placeForm.controls['yValue'].setValue('1');
    component.placeForm.controls['direction'].setValue('EAST');
    expect(component.placeForm.valid).toBeTruthy();
  });

  it('form should be invalid', () => {
    component.placeForm.controls['xValue'].setValue('');
    component.placeForm.controls['yValue'].setValue('');
    component.placeForm.controls['direction'].setValue('');
    expect(component.placeForm.valid).toBeFalsy();
  });

  it('form should have valid values', () => {
    component.placeForm.controls['xValue'].setValue('1');
    component.placeForm.controls['yValue'].setValue('2');
    component.placeForm.controls['direction'].setValue('NORTH');
    expect(component.placeForm.valid).toBeTruthy();
  });

  it('form should have invalid values', () => {
    component.placeForm.controls['xValue'].setValue('10');
    component.placeForm.controls['yValue'].setValue('1');
    component.placeForm.controls['direction'].setValue('SOUTH');
    expect(component.placeForm.valid).toBeFalsy();
  });
});
