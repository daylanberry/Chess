import { isValidSuggestion }from '../src/helpers';

export const knightRules = (type, row, col, matrix) => {
  let r = row + 2;
  let c = col - 1;

  isValidSuggestion(r, c, matrix, type)

  c = col + 1

  isValidSuggestion(r, c, matrix, type)

  r = row - 2;
  c = col - 1


  isValidSuggestion(r, c, matrix, type)

  c = col + 1

  isValidSuggestion(r, c, matrix, type)

  c = col - 2
  r = row + 1

  isValidSuggestion(r, c, matrix, type)

  r = row - 1
  isValidSuggestion(r, c, matrix, type)

  c = col + 2
  r = row + 1

  isValidSuggestion(r, c, matrix, type)

  r = row - 1
  isValidSuggestion(r, c, matrix, type)

}