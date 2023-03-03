let matrix=[
  [4,4,2,4,8],
  [2,1,2,4,4],
  [2,4,8,2,2],
  [1,4,2,2,16]
];

let reverse_matrix=[];

const len=matrix.length;
let row_length=len - 1;
for (let index = 0; index < len - 1; index++) {
  for (let i=1; i<=row_length; i++){
   const first_member=matrix[index][index];
   const row_first_member=matrix[i+index][index];
    for (let j=index; j<=len; j++){ 
      matrix[i+index][j]=matrix[i+index][j]*first_member/row_first_member-matrix[index][j] 
    }
  } 
  row_length=row_length-1
}

for ( let i=0; i<=len-1; i++){
  reverse_matrix[i]=[];
  for (let j=0; j<=len; j++){
    reverse_matrix[i][j]=matrix[len-1-i][len-j]
  }
}

row_length=len - 1;

for (let index = 0; index < len - 1; index++) {
  for (i=1; i<=row_length; i++){
   const first_member=reverse_matrix[index][index+1];
   const row_first_member=reverse_matrix[i+index][index+1];
    for (j=index; j<=len; j++){ 
      reverse_matrix[i+index][j]=reverse_matrix[i+index][j]*first_member/row_first_member-reverse_matrix[index][j]  
    }
  } 
  row_length=row_length-1
}

for (let i = 0; i < reverse_matrix.length; i++) {
 for (let j = 0; j <= reverse_matrix.length; j++) {
    if(j=i+1){
      console.log(reverse_matrix[i][j-i-1]/reverse_matrix[i][j])
      break;
    }
 }
}

