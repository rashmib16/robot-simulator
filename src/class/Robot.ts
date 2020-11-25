import { Direction } from 'src/enum/Direction';
import { Rotate } from 'src/enum/Rotate';
import { environment } from '../environments/environment';

const GRID_SIZE = environment.GRID_SIZE;

export class Robot {
  //Setting default vales of X, Y and Direction
    x: number = 0;
    y: number = 0;
    direction: Direction = Direction.EAST;
  
    /**
     * Create robot
     * @param x first input of x position
     * @param y second input of y position
     * @param direction direction of the robot
     */
    constructor(x?: number, y?: number, direction?: Direction) {
      this.x = x;
      this.y = y;
      this.direction = direction;
    }
  
    /**
     * Moves the robot by one unit
     * @returns true if Valid position to move, else false 
     */
    move(): boolean {
      switch(this.direction) {
  
        // If direction is NORTH and current Y position is less than the grid size, we increase the y position by 1
        case Direction.NORTH:
          if (this.y < GRID_SIZE - 1) {
            this.y += 1;
            return true;
          }
          return false;
  
          // If direction is EAST and current X position is less than the grid size, we increase the x position by 1
        case Direction.EAST:
          if (this.x < GRID_SIZE - 1) {
            this.x += 1;
            return true;
          }
          return false;
  
          // If direction is SOUTH and current Y position is greater than 0, we decrease the y position by 1
        case Direction.SOUTH:
          if (this.y > 0) {
            this.y -= 1;
            return true;
          }
          return false;
  
          // If direction is WEST and current X position is grater than 0, we decrease the x position by 1
        case Direction.WEST:
          if (this.x > 0) {
            this.x -= 1;
            return true;
          }
          return false;
  
        default:
          return false;
      }
    }
  
    /**
     * Takes the direction to rotate robot
     * @param direction direction of the robot
     * @returns void
     */
    changeDirection(direction: Rotate): void {
      // If user wants to rotate robot direction to LEFT
      if (direction == Rotate.LEFT) {
        /**
         * If current direction is North, and user wants to rotate left; 
         * then the direction will become WEST to avoid negative value
         */
        this.direction = (this.direction == Direction.NORTH) ? Direction.WEST : this.direction - 90;
      // If user wants to rotate robot direction to RIGHT
      } else if(direction == Rotate.RIGHT) {
        /**
         * If current direction is West, and user wants to rotate right; 
         * then the direction will become NORTH to avoid angle of 360deg
         */
        this.direction = (this.direction == Direction.WEST) ? Direction.NORTH : this.direction + 90;
      }
    }
  
    /**
     * Takes the position and direction
     * @param x first input of x position
     * @param y second input of y position
     * @param direction direction of the robot
     * @returns void
     */
    place(x?: number, y?: number, direction?: Direction): void {
      this.x = x;
      this.y = y;
      this.direction = direction;
    }
  }