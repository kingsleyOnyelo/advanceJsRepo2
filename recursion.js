function addNum(val){
  if(val == 0){
    return 0;
  }else{
    return val + addNum(val - 1);
  }
}
//output addNum function value
addNum(43);