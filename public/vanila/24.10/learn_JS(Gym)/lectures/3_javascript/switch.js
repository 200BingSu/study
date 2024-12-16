'use-strict'

// const subject = "C";
// switch (subject) {
// 	case 'java': console.log('Good!')
// 		break;
// 	case 'css': console.log('Like!')
// 		break;
// 	case 'JS': console.log('Love');
// 		break;
//   case 'HTML': console.log('Hi'); 
//     break;
// 	default: console.log('모든 case와 일치하지 않을 경우')
// }


const score = prompt('점수를 입력해주세요');
const value=Math.floor(score/10);
switch(value){
  case 10:
  case 9: console.log('A');
    break;
  case 8:
    case 7: console.log('B');
      break;
  case 6:
  case 5: console.log('C');
    break;
  default: console.log('D')

};