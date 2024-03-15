/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    //Transpose the matrix
    for(let i=0; i<matrix.length; i++){
//replace the elements in the matrix with the elements in the transposed matrix
//i.e replacing [i][j] with [j][i]

        for(let j=i; j<matrix[0].length; j++){

            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    console.log(matrix);

    //reverse the matrix
    for(let i=0; i<matrix.length; i++){
        //loop through the matrix and replace the elements in the matrix with the elements in the reversed matrix
        //i.e replacing [i][j] with [i][matrix.length-1-j]
        for(let j=0; j<matrix.length/2; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix.length-1-j];
            matrix[i][matrix.length-1-j] = temp;
        }
    }
    return matrix;

    
};


console.log(rotate([[1,2,3],[4,5,6],[7,8,9]])); //[[7,4,1],[8,5,2],[9,6,3]]