function adjacentElementsProduct(inputArray) {
  return inputArray.reduce(function(acc, int, i, inputArray)  {
      if (inputArray.length > i + 1) {
         return [
          ...acc,
          int * inputArray[i + 1]
      ]; 
      } else {
          return acc;
      }
  }, []).reduce(function(acc, currentValue) {
      return Math.max(acc, currentValue);
  });
}