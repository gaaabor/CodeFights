function checkPalindrome(inputString) {
  const arr = inputString.split('');
  const arrRev = arr.reverse();
  const rev = arrRev.join('');
  if (inputString === rev) {
      return true;
  } else {
      return false;
  }
}