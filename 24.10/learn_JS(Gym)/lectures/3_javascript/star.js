'use strict';

window.onload = function () {
  /*
   - '*'      document.write('*');
   - 개행      document.write('<br>');
   - space    document.write('&nbsp;'); 
   - 가로선     document.write('<hr>');
   */
  //
  /*
    1] 정사각형
    *****
    *****
    *****
    *****
    *****
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    2] 삼각형1
    *
    **
    ***
    ****
    *****
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 5 - i; j < 6; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    3] 삼각형1-reverse
    *****
    ****
    ***
    **
    *
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 0 + i; j < 5; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    4] 삼각형2
        *
       **
      ***
     ****
    *****
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 0 + i; j < 5; j++) {
      document.write('&nbsp');
    }
    for (let j = 4 - i; j < 5; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    5] 삼각형2-reverse
    *****
     ****
      ***
       **
        *
  */
  for (let j = 0; j < 5; j++) {
    for (let i = 5 - j; i < 5; i++) {
      document.write('&nbsp');
    }
    for (let i = j; i < 5; i++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    5] 정삼각형
        *
       ***
      *****
     ******* 
    ********* 
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 0 + i; j < 4; j++) {
      document.write('&nbsp');
    }
    for (let k = 7 - 2 * i; k < 8; k++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    5] 정삼각형-reverse
    ********* 
     ******* 
      *****
       ***
        *
  */
  for (let i = 0; i < 5; i++) {
    for (let k = 5 - i; k < 5; k++) {
      document.write('&nbsp');
    }
    for (let j = 2 * i - 1; j < 8; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    5] 다이아몬드
        *
       ***
      *****
     ******* 
    ********* 
     ******* 
      *****
       ***
        *
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 0 + i; j < 4; j++) {
      document.write('&nbsp');
    }
    for (let k = 7 - 2 * i; k < 8; k++) {
      document.write('*');
    }
    document.write('<br>');
  }
  for (let i = 0; i < 4; i++) {
    for (let k = 4 - i; k < 5; k++) {
      document.write('&nbsp');
    }
    for (let j = 2 * i - 1; j < 6; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
};
