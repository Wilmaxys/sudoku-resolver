import { Command } from 'commander';
import { Game } from './models/game';
import { logger } from './utils/logger';

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
      sudokuSize: options.size,
      populationCount: options.population
    });

    console.log(game.population.individuals.values);
  }
} catch (error: any) {
  logger.error(error.message);
}
