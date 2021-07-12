import { BaseConf } from './base-conf';
import { Population } from './population';

export class Game {
  baseConf: BaseConf;
  population: Population;

  constructor(baseConf: BaseConf) {
    this.baseConf = baseConf;
    this.population = new Population();
  }

  run(): void {
    this.population.generate(
      this.baseConf.sudokuSize,
      this.baseConf.populationCount
    );
  }
}
