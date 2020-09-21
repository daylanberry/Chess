import { peices } from '../src/helpers';
import { pawnRules } from './pawnRules';
import { rookRules } from './rookRules';
import { knightRules } from './knightRules';
import { bishopRules } from './bishopRules';
import { kingRules } from './kingRules';
import { queenRules } from './queenRules';

export const clearMatrix = (matrix, deleteRed=false) => {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      let current = matrix[i][j]

      if (deleteRed) {
        if (current.color === 'yellow' || current.color === 'red') {
          current.color = ''
        }
      } else if (current.color === 'yellow') {
        current.color = ''
      }

    }
  }
};

export const peiceRule = (type, row, col, matrix) => {
  if (type === 'WP') pawnRules(type[0], row, col, matrix)
  if (type === 'BP') pawnRules(type[0], row, col, matrix)
  if (type === 'WR' || type === 'BR') rookRules(type[0], row, col, matrix)
  if (type === 'WN' || type === 'BN') knightRules(type[0], row, col, matrix)
  if (type === 'WB' || type === 'BB') bishopRules(type[0], row, col, matrix)
  if (type === 'WQ' || type === 'BQ') queenRules(type[0], row, col, matrix)
  if (type === 'WK' || type === 'BK') kingRules(type[0], row, col, matrix)
}






