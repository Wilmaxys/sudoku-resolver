export class Individual {
  fitness: any;
  values: any[] = [];

  /*  A candidate solutions to the Sudoku puzzle.  */
  constructor() {
    this.fitness = null;
  }

  update_fitness(): void {
    /*  The fitness of a candidate solution is determined by how close it is to being the actual solution 
    to the puzzle. The actual solution (i.e. the 'fittest') is defined as a 9x9 grid of numbers in the range 
    [1, 9] where each row, column and 3x3 block contains the numbers [1, 9] without any duplicates 
    (see e.g. http://www.sudoku.com/); if there are any duplicates then the fitness will be lower.  */
    //this.values.forEach((item: any[]) => {
    //  item.forEach((element: any) => {
    //    console.log('toto');
    //  });
    //});
    //for (var i = 0, _pj_a = Nd; i < _pj_a; i += 1) {
    //  for (var j = 0, _pj_b = Nd; j < _pj_b; j += 1) {
    //    column_count[this.values[j][i] - 1] += 1;
    //  }
    //  column_sum += 1.0 / set(column_count).length / Nd;
    //  column_count = numpy.zeros(Nd);
    //}
    //for (var i = 0, _pj_a = Nd; i < _pj_a; i += 3) {
    //  for (var j = 0, _pj_b = Nd; j < _pj_b; j += 3) {
    //    block_count[this.values[i][j] - 1] += 1;
    //    block_count[this.values[i][j + 1] - 1] += 1;
    //    block_count[this.values[i][j + 2] - 1] += 1;
    //    block_count[this.values[i + 1][j] - 1] += 1;
    //    block_count[this.values[i + 1][j + 1] - 1] += 1;
    //    block_count[this.values[i + 1][j + 2] - 1] += 1;
    //    block_count[this.values[i + 2][j] - 1] += 1;
    //    block_count[this.values[i + 2][j + 1] - 1] += 1;
    //    block_count[this.values[i + 2][j + 2] - 1] += 1;
    //    block_sum += 1.0 / set(block_count).length / Nd;
    //    block_count = numpy.zeros(Nd);
    //  }
    //}
    //if (
    //  Number.parseInt(row_sum) === 1 &&
    //  Number.parseInt(column_sum) === 1 &&
    //  Number.parseInt(block_sum) === 1
    //) {
    //  fitness = 1.0;
    //} else {
    //  fitness = column_sum * block_sum;
    //}
    //this.fitness = fitness;
    //return;
  }

  mutate(mutation_rate: any, given: any) {
    /*  Mutate a candidate by picking a row, and then picking two values within that row to swap.  */
    //var from_column, r, row1, row2, success, temp, to_column;
    //r = random.uniform(0, 1.1);
    //while (r > 1) {
    //  r = random.uniform(0, 1.1);
    //}
    //success = false;
    //if (r < mutation_rate) {
    //  while (!success) {
    //    row1 = random.randint(0, 8);
    //    row2 = random.randint(0, 8);
    //    row2 = row1;
    //    from_column = random.randint(0, 8);
    //    to_column = random.randint(0, 8);
    //    while (from_column === to_column) {
    //      from_column = random.randint(0, 8);
    //      to_column = random.randint(0, 8);
    //    }
    //    if (
    //      given.values[row1][from_column] === 0 &&
    //      given.values[row1][to_column] === 0
    //    ) {
    //      if (
    //        !given.is_column_duplicate(
    //          to_column,
    //          this.values[row1][from_column]
    //        ) &&
    //        !given.is_column_duplicate(
    //          from_column,
    //          this.values[row2][to_column]
    //        ) &&
    //        !given.is_block_duplicate(
    //          row2,
    //          to_column,
    //          this.values[row1][from_column]
    //        ) &&
    //        !given.is_block_duplicate(
    //          row1,
    //          from_column,
    //          this.values[row2][to_column]
    //        )
    //      ) {
    //        temp = this.values[row2][to_column];
    //        this.values[row2][to_column] = this.values[row1][from_column];
    //        this.values[row1][from_column] = temp;
    //        success = true;
    //      }
    //    }
    //  }
    //}
    //return success;
  }
}
