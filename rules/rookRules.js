import { isValidSuggestion } from '../src/helpers';

export const rookRules = (type, row, col, matrix) => {
  let r = row + 1;
  let c = col + 1;

  let oppositeType = type === 'W' ? 'B' : 'W'


  while (matrix[r] && isValidSuggestion(r, col, matrix, type)) {

    if (matrix[r][col].peiceName[0] === oppositeType) break
    r++
  }


  while (c < matrix[row].length && isValidSuggestion(row, c, matrix, type)) {

    if (matrix[row][c].peiceName[0] === oppositeType) break
    c++
  }

  c = col - 1;

  while (c >= 0 && isValidSuggestion(row, c, matrix, type)) {

    if (matrix[row][c].peiceName[0] === oppositeType) break

    c--
  }

  r = row - 1;

  while (r >= 0 && isValidSuggestion(r, col, matrix, type)) {

    if (matrix[r][col].peiceName[0] === oppositeType) break

    r--
  }


}