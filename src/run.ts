import { Command } from 'commander';
import { Game } from './models/game';
import { Individual } from './models/individual';
import { logger } from './utils/logger';
import { separateArray } from './utils/separate-array';

try {
  const program = new Command();
  program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --size <size>', 'size of the sudoku')
    .option('-p, --population <population>', 'population');
  program.parse(process.argv);
  const options: any = program.opts();

  if (Number.isInteger(options.size) && (Number(options.size) / 3) % 3 != 0) {
    logger.error('La taille du sudoku doit être un multiple de trois.');
  } else if (Number.isInteger(options.size) && !Number(options.population)) {
    logger.error('La taille du sudoku doit être un multiple de trois.');
  } else {
    const game: Game = new Game({
      sudokuSize: Number(options.size),
      populationCount: Number(options.population)
    });

    game.run();
    game.population.individuals.forEach((element: Individual) => {
      console.log('====================');
      logger.info(`${element.fitness} / 243`);
      console.table(separateArray(element.grid, Number(options.size)));
    });
  }
} catch (error: any) {
  logger.error(error.message);
}
