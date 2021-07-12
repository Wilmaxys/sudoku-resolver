import { Individual } from './individual';

export class Population {
  individuals: Individual[] = [];

  generate(sudokuSize: number, pupulationCount: number): void {
    for (let i = 0; i < pupulationCount; i++) {
      const individual: Individual = new Individual();

      for (let j = 1; j < sudokuSize + 1; j++) {
        for (let k = 1; k < sudokuSize + 1; k++) {
          individual.values[k + sudokuSize * (j - 1)] = j;
        }
      }

      individual.values = individual.values.sort(() => 0.5 - Math.random());
      this.individuals.push(individual);
    }
  }

  sort(): void {
    /*  Sort the population based on fitness.  */
    //this.candidates.sort(this.sort_fitness);
    //return;
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
