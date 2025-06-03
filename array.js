
let array = [[1,0,1,1,0],
             [0,1,1,0,1],
             [1,1,0,1,0],
             [1,0,0,1,1]];
let a = array.length;
console.log(a);
let b = array[0].length;
console.log(b);

let num1 = array[0][1]+array[1][1]+array[1][0];
console.log(num1);

let bench = 0;
let girl = [];

for(i=0;i<a;i++){
  for(j=0;j<b;j++){
    let qualities; 
    let location;
    if(array[i][j]==1){
      console.log("It is a girl");
      if(j==0 && i==0){
        qualities = array[i][j+1]+array[i+1][j+1]+array[i+1][j];
        console.log(qualities,`The girls location is in ${i},${j}`);
        location = [qualities,[i,j]]
        console.log(location);
        girl.push(location);
      }else if(j==b-1 && i==0){
        qualities = array[i][j-1]+array[i+1][j-1]+array[i+1][j];
        console.log(qualities,`The girls location is in ${i},${j}`);
        location = [qualities,[i,j]]
        console.log(location);
        girl.push(location);
      }else if(j==0 && i==a-1){
        qualities = array[i][j+1]+array[i-1][j+1]+array[i-1][j];
        console.log(qualities,`The girls location is in ${i},${j}`);
        location = [qualities,[i,j]]
        console.log(location);
        girl.push(location);
      }else if(j==b-1 && i==a-1){
        qualities = array[i][j-1]+array[i-1][j-1]+array[i-1][j];
        console.log(qualities,`The girls location is in ${i},${j}`);
        location = [qualities,[i,j]]
        console.log(location);
        girl.push(location);
      }else if(i>0 && i<a-1 && j==0){
        qualities = array[i][j+1]+array[i-1][j]+array[i-1][j+1]+array[i+1][j]+array[i+1][j+1];
        console.log(qualities,`The girls location is in ${i},${j}`);
        location = [qualities,[i,j]]
        console.log(location);
        girl.push(location);
      }else if(i>0 && i<a-1 && j==b-1){
        qualities = array[i][j-1]+array[i-1][j]+array[i-1][j-1]+array[i+1][j-1]+array[i+1][j];
        console.log(qualities,`The girls location is in ${i},${j}`);
        location = [qualities,[i,j]]
        console.log(location);
        girl.push(location);
      }else if(j>0 && j<b-1 && i==0){
        qualities = array[i][j-1]+array[i][j+1]+array[i+1][j-1]+array[i+1][j]+array[i+1][j+1];
        console.log(qualities,`The girls location is in ${i},${j}`);
        location = [qualities,[i,j]]
        console.log(location);
        girl.push(location);
      }else if(j>0 && j<b-1 && i==a-1){
        qualities = array[i][j-1]+array[i][j+1]+array[i-1][j-1]+array[i-1][j]+array[i-1][j+1];
        console.log(qualities,`The girls location is in ${i},${j}`);
        location = [qualities,[i,j]]
        console.log(location);
        girl.push(location);
      }else{
        qualities = array[i+1][j+1]+array[i+1][j]+array[i+1][j-1]+array[i][j-1]+array[i][j+1]+array[i-1][j-1]+array[i-1][j]+array[i-1][j+1];
        console.log(qualities,`The girls location is in ${i},${j}`);
        location = [qualities,[i,j]]
        console.log(location);
        girl.push(location);
      }
      if(qualities>bench){
        bench = qualities
      }
      console.log(bench);
    }
    else{
      console.log("Not a girl");
    }
  }
}
console.log(girl);

let final = [];
for(i=0;i<girl.length;i++){
  if(girl[i][0] == bench){
    final.push(girl[i][1]); 
  }
}
console.log("Hajira",final);



if(bench == 0){
  console.log("No match found");
}else{
  if(final.length==1){
    console.log(`${bench} : ${final[0][0]} : ${final[0][1]}`);
  }else{
    // let urgent = final[0][0] + final[0][1];
    let sort = [];
    for(i=0;i<final.length;i++){
      let sum = 0;
      for(j=0;j<2;j++){
        sum = sum + final[i][j];
      }
        console.log(sum); 
        sort=[sum,final[i]];   
    }
  }
}