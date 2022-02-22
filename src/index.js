module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix === undefined) {
    return result
  } else {  
    for (i = 0; i < matrix.length ; i++) {
      if (i % 2 === 0) {
        for (n = 0; n < matrix[i].length; n++) {
          result.push(matrix[i][n])
        }
      } else {
        for (n = matrix[i].length - 1; n >= 0; n--) {
          result.push(matrix[i][n])
        }
      }
    }
  return result
  }
}


