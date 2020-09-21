export const peices = {
  'WK': '♔',
  'WQ': '♕',
  'WR': '♖',
  'WB': '♗',
  'WN': '♘',
  'WP': '♙',
  'BK': '♚',
  'BQ': '♛',
  'BR': '♜',
  'BB': '♝',
  'BN': '♞',
  'BP': '♟',
  'blank': ''
}

export const specialWhitePeices = [
  { peice :peices['WR'], peiceName: 'WR'},
  { peice :peices['WN'], peiceName: 'WN'},
  { peice :peices['WB'], peiceName: 'WB'},
  { peice :peices['WK'], peiceName: 'WK'},
  { peice :peices['WQ'], peiceName: 'WQ'},
  { peice :peices['WB'], peiceName: 'WB'},
  { peice :peices['WN'], peiceName: 'WN'},
  { peice :peices['WR'], peiceName: 'WR'}
]

export const specialBlackPeices = [
  { peice : peices['BR'], peiceName: 'BR'},
  { peice : peices['BN'], peiceName: 'BN'},
  { peice : peices['BB'], peiceName: 'BB'},
  { peice : peices['BK'], peiceName: 'BK'},
  { peice : peices['BQ'], peiceName: 'BQ'},
  { peice : peices['BB'], peiceName: 'BB'},
  { peice : peices['BN'], peiceName: 'BN'},
  { peice : peices['BR'], peiceName: 'BR'}
]

export const getPeice = (row, col) => {
  const { peice, peiceName } = specialWhitePeices[col];
  const { peice: blackPeice, peiceName: blackPeiceName} = specialBlackPeices[col]

  if (row === 0) {
    return { peice, color: '', peiceName }
  }

  if (row === 7) {
    return { peice: blackPeice, color: '', peiceName: blackPeiceName
    }
  }

  if (row === 1) {
    return {
      peice: peices['WP'],
      color: '',
      peiceName: 'WP'
    }
  }

  if (row === 6) {
    return {
      peice: peices['BP'],
      color: '',
      peiceName: 'BP'
    }
  }

  return { peice: '', color: '', peiceName: '' }

}

export const setBoard = () => {
  var board = [];

  for (var i = 0; i < 8; i++) {
    let row = [];
    for (var j = 0; j < 8; j++) {
      let peice = getPeice(i, j);
      row.push(peice)
    }
    board.push(row)
  }

  return board
}


// Get letter of peiceName to match type
export const isValidSuggestion = (row, col, matrix, type) => {

  if (matrix[row] && matrix[row][col] && matrix[row][col].peiceName[0] !== type) {
    matrix[row][col] = {
      ...matrix[row][col],
      color: 'yellow'
    }

    return true
  }

  return false;
}
