import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Direction } from 'src/enum/Direction';

const GRID_SIZE = environment.GRID_SIZE;

@Component({
  selector: 'app-place-robot',
  templateUrl: './place-robot.component.html',
  styleUrls: ['./place-robot.component.scss'],
})
export class PlaceRobotComponent {
  @Output() values: EventEmitter<any> = new EventEmitter();

  Direction = Direction;
  invalidValue: boolean = false;

  // Creating form group for placing robot at particular position with direction
  placeForm = new FormGroup({
    xValue: new FormControl('', [Validators.min(0), Validators.max(GRID_SIZE-1), Validators.required]),
    yValue: new FormControl('', [Validators.min(0), Validators.max(GRID_SIZE-1), Validators.required]),
    direction: new FormControl('', Validators.required),
  });

  constructor() { }

  /**
   * Emitting the form value if the form is valid
   * @returns void
   */
  onPlace(): void {
    if (!this.placeForm.valid) {
      this.invalidValue = true;
      // Invalid value displays for 2 seconds if user enters any invalid value
      setTimeout(() => {
        this.invalidValue = false;
      }, 2000);
      this.values.emit(false);
    } else {
      this.values.emit(this.placeForm.value);
    }
  }

}
