import  { isValidSuggestion } from '../src/helpers';

export const pawnRules = (type, row, col, matrix) => {

  if (type === 'W') {
    isValidSuggestion(row + 1, col - 1, matrix, type)
    isValidSuggestion(row + 1, col + 1, matrix, type)
  }

  if (type === 'B') {
    isValidSuggestion(row - 1, col - 1, matrix, type)
    isValidSuggestion(row -1, col + 1, matrix, type)
  }


}