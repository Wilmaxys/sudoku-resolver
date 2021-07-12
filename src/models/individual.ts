import { separateArray } from '../utils/separate-array';
import { BaseConf } from './base-conf';
import { onlyUnique } from '../utils/only-unique';

export class Individual {
  fitness: any;
  grid: any[] = [];

  update_fitness(baseConf: BaseConf): void {
    let score = 0;
    const array: any[] = separateArray(this.grid, baseConf.sudokuSize);

    // Calcultate score for line
    array.forEach((element: any) => {
      score += element.filter(onlyUnique).length;
    });

    // Calculate score for column
    for (let i = 0; i < baseConf.sudokuSize; i++) {
      let tmpArray: any[] = [];
      for (let j = 0; j < baseConf.sudokuSize; j++) {
        tmpArray.push(array[j][i]);
      }
      score += tmpArray.filter(onlyUnique).length;
      tmpArray = [];
    }

    const squareArrayTmp: any[] = [];
    const squareArray: any[] = [];

    for (let row = 0; row < baseConf.sudokuSize; row += 3) {
      for (let column = 0; column < baseConf.sudokuSize; column += 3) {
        array
          .filter((_, index) => index >= row && index < row + 3)
          .forEach((chunk, index) => {
            squareArrayTmp.push(
              chunk.filter(
                (value: any, index: any) =>
                  index >= column && index < column + 3
              )
            );
          });
      }
    }

    for (let index = 0; index < squareArrayTmp.length / 3; index++) {
      squareArray.push([
        ...squareArrayTmp[index],
        ...squareArrayTmp[index + 1],
        ...squareArrayTmp[index + 2]
      ]);
    }

    squareArray.forEach((element: any) => {
      score += element.filter(onlyUnique).length;
    });

    this.fitness = score;
  }

  //mutate(mutation_rate: any, given: any) {}
}
