import { isValidSuggestion } from '../src/helpers';
import { rookRules } from './rookRules';
import { bishopRules } from './bishopRules';

export const queenRules = (type, row, col, matrix) => {
  rookRules(type, row, col, matrix)
  bishopRules(type, row, col, matrix)

}