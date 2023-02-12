function pairZeros(arr) {
  //create a 0 counter and empty array
  let count = 0;
  let newArr = [];
  
  
  //use forEach to push elements into new array
  //push in all nums plus the odd 0's into neww array
  arr.forEach((item, index, array)=>{
    //if the value is 0
    if(item === 0){
      //add to the count, then check if the count is even/odd
      count++
      if(count % 2 === 1){
        //odd, push 0 into array
        newArr.push(item)
      }else if(count % 2 === 0){
        //even means paired.. so do nothing, move on
      }
    }else{
      //push all other numbers into array
      newArr.push(item)
    }    
  })
  
  //return the new array
  return newArr
}
