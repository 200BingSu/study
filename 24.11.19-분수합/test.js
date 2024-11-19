function solution(numer1, denom1, numer2, denom2) {
  var answer = [];

  if (denom1 === denom2) {
    answer = [numer1 + numer2, denom1];
  } else if (denom1 > denom2) {
    if (denom1 % denom2 === 0) {
      answer = [numer1 + numer2 * (denom1 / denom2), denom1];
    } else {
      answer = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
    }
  } else {
    if (denom1 % denom2 === 0) {
      answer = [numer1 * (denom2 / denom1) + numer2, denom2];
    } else {
      answer = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
    }
  }
  return answer;
}
