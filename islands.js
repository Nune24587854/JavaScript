const array =[
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,0,0,0,1,0,0,1,0,0],
  [0,0,1,1,0,1,1,1,0,0,1,0],
  [0,0,1,0,0,0,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,1,0,0,0,1,1,0,0],
  [0,0,1,1,1,0,0,1,1,1,0,0],
  [0,0,0,1,0,0,0,0,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0]
]
//  const array =[
//   [0,0,0,0,0,0],
//   [0,1,0,0,1,0],
//   [0,0,1,0,1,0],
//   [0,0,1,1,0,0],
//   [0,0,0,0,0,0]
//  ]

// const array = [
//   [0,0,0,0,0,0,0,0],
//   [0,1,0,1,0,0,0,0],
//   [0,0,1,1,0,1,1,0],
//   [0,0,0,1,0,0,1,0],
//   [0,0,0,0,0,1,0,0],
//   [0,0,0,0,0,0,0,0]
// ]
let count=0
let islands= []
console.log(array.length)
function island (row, column){
  for (let i=row-1 ; i<=row + 1 ; i++){
    for (let j=column-1; j<=column + 1 ; j++){
      if (array[i][j]==1){
        islands.push(`${[i,j]}`);
        array[i][j] = 0;
        island(i, j);
      }
    }
}
}
for (let i=1; i<array.length ; i++){
    for (let j=1; j<array[i].length; j++){
      if (array[i][j]==1){
        islands.push(`${[i,j]}`);
        array[i][j] = 0;
        island(i,j);
        islands.push("---")
        count+=1
      }
    }
   

}


console.log(islands)

console.log(count)
