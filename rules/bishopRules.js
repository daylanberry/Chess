import { isValidSuggestion } from '../src/helpers';


export const bishopRules = (type, row, col, matrix) => {

  let r = row + 1;
  let c = col + 1;
  let oppositeType = type === 'W' ? 'B' : 'W'

  while (matrix[r] && isValidSuggestion(r, c, matrix, type)) {
    if (matrix[r][c].peiceName[0] === oppositeType) break
    r+= 1
    c+=1

  }

  r = row - 1;
  c = col - 1;

  while (matrix[r] && isValidSuggestion(r, c, matrix, type)) {
    if (matrix[r][c].peiceName[0] === oppositeType) break
    r--
    c--
  }
  r = row - 1
  c = col + 1

  while (matrix[r] && isValidSuggestion(r, c, matrix, type)) {
    if (matrix[r][c].peiceName[0] === oppositeType) break;
    r--
    c++
  }

  r = row + 1
  c = col - 1

  while (matrix[r] && isValidSuggestion(r, c, matrix, type)) {
    if (matrix[r][c].peiceName[0] === oppositeType) break;

    r++
    c--
  }


}