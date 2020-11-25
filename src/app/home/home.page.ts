import { Component } from '@angular/core';
import { Robot } from 'src/class/Robot';
import { Direction } from 'src/enum/Direction';
import { Rotate } from 'src/enum/Rotate';
import { environment } from '../../environments/environment';

const GRID_SIZE = environment.GRID_SIZE;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  gridSize = GRID_SIZE;
  robot;
  invalidMove: boolean = false;
  placement: boolean = true;

  constructor() {}

  get rotate(): typeof Rotate {
    return Rotate;
  }

  get direction(): typeof Direction {
    return Direction;
  }

  /**
   * function called on Move button click
   * @returns void
   */
  robotMove(): void {
    const result = this.robot.move();
    if (!result) this.makeInvalidMove();
  }

  /**
   * Place the robot on emitted values
   * @param placementValues - x, y and direction of robot
   * @returns void
   */
  getValues(placementValues): void {
    if(!placementValues) {
      this.makeInvalidMove();
      return;
    }
    const xValue: string = placementValues.xValue;
    const yValue: string = placementValues.yValue;
    const direction: string = placementValues.direction;

    var directionEnumValue: Direction = (<any>Direction)[direction];
    this.robot = new Robot(Number(xValue), Number(yValue), directionEnumValue);
    this.placement = false; //hiding the placement form
  }

  /**
   * Invalid move message displayed for 2 seconds
   * @returns void
   */
  private makeInvalidMove(): void {
    this.invalidMove = true;
    // Invalid move displays for 2 seconds if user selects any invalid move
    setTimeout(() => {
      this.invalidMove = false;
    }, 2000);
  }

}
