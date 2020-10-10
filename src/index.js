// You should implement your task here.

module.exports = function towelSort(matrix) {
  if(!matrix) return []
  let arr = []
  matrix.map(elem => {
    if ((matrix.indexOf(elem) + 1) % 2 === 0) {
      elem.reverse()
    }
    arr.push(...elem)
  })
  return arr
}