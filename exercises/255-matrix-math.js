// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]

// Strategy:

function matrixAdd (m1, m2) {
    matrixSum = [[],[]]
    sum00 = m1[0][0] + m2[0][0]
    matrixSum[0].push(sum00)
    sum01 = m1[0][1] + m2[0][1]
    matrixSum[0].push(sum01)
    prod10 = m1[1][0] + m2[1][0]
    matrixSum[1].push(prod10)
    prod11 = m1[1][1] + m2[1][1]
    matrixSum[1].push(prod11)

    return matrixSum
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]

function matrixMultiply (m1, m2) {
    matrixProduct = [[],[]]
    prod00 = m1[0][0] * m2[0][0] + m1[0][1] * m2[1][0]
    matrixProduct[0].push(prod00)
    prod01 = m1[0][0] * m2[0][1] + m1[0][1] * m2[1][1]
    matrixProduct[0].push(prod01)
    prod10 = m1[1][0] * m2[0][0] + m1[1][1] * m2[1][0]
    matrixProduct[1].push(prod10)
    prod11 = m1[1][0] * m2[0][1] + m1[1][1] * m2[1][1]
    matrixProduct[1].push(prod11) 

    return matrixProduct
}