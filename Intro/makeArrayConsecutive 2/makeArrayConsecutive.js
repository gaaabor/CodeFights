function makeArrayConsecutive2(statues) {
  statues.sort(function(a, b){return a-b});
  let min = statues[0];
  let max = statues[statues.length - 1];
  let count = 0;
  
  for (i = min; i < max; i++) {
      if(statues.indexOf(i) === -1){
          count++;
      }
  }
  
  return count;
}
