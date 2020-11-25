export enum Direction {
  NORTH = 0,
  EAST = 90,
  SOUTH = 180,
  WEST = 270
}

export namespace Direction {
  export function values() {
    return Object.keys(Direction).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
  