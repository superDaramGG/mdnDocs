//filter() 메서드는 주어진 판별 함수를 통과하는 요소를 모아 새로운 배열로 만들어 반환한다.
var words = ['spray','limit','elite','exuberant','destruction','press'];

const result = words.filter(words => words.length > 6);

console.log(result);

//1. 요소값, 2. 요소 인덱스, 3.순회(traverse)되는 배열 객체
//filter()는 호출되는 배열을 변화시키지(mutate)않는다.

//모든 작은 값 걸러내기
function isBigEnough(value){
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

//json에서 무효한 항복 거르기
//0이 아닌, 숫자 id인 모든 요소의 걸러진 json을 만들기 위해 filter()를 사용한다.

//배열 내용 검색
var fruits = ['apple','banana','grapes','mango','orange'];

function filterItems(query){
  return fruits.filter(function(el){
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple','grapes']
console.log(filterItems('an')); // ['banana','mango','orange'];
