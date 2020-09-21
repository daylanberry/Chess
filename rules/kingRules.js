import { isValidSuggestion } from '../src/helpers';

export const kingRules = (type, row, col, matrix) => {
  isValidSuggestion(row + 1, col + 1, matrix, type);
  isValidSuggestion(row + 1, col - 1, matrix, type);
  isValidSuggestion(row - 1, col - 1, matrix, type);
  isValidSuggestion(row - 1, col + 1, matrix, type);
  isValidSuggestion(row, col + 1, matrix, type);
  isValidSuggestion(row, col - 1, matrix, type);
  isValidSuggestion(row + 1, col, matrix, type);
  isValidSuggestion(row - 1, col, matrix, type);
}