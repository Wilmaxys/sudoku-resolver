import { BaseConf } from './base-conf';
import { Individual } from './individual';

export class Population {
  individuals: Individual[] = [];

  generate(baseConf: BaseConf): void {
    const { sudokuSize, populationCount } = baseConf;

    for (let i = 0; i < populationCount; i++) {
      const individual: Individual = new Individual();

      for (let j = 1; j < sudokuSize + 1; j++) {
        for (let k = 1; k < sudokuSize + 1; k++) {
          individual.grid[k + sudokuSize * (j - 1) - 1] = j;
        }
      }

      individual.grid = individual.grid.sort(() => 0.5 - Math.random());
      this.individuals.push(individual);
    }
  }

  update_fitness(baseConf: BaseConf): void {
    this.individuals.forEach((element: Individual) => {
      element.update_fitness(baseConf);
    });
  }

  sort_fitness(): void {
    /*  The sorting function.  */
    //if (x.fitness < y.fitness) {
    //  return 1;
    //} else {
    //  if (x.fitness === y.fitness) {
    //    return 0;
    //  } else {
    //    return -1;
    //  }
    //}
  }
}
