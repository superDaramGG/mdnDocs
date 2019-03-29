//map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한
//결과를 모아 새로운 배열을 반환한다.
//함수의 반환값으로 새로운 배열을 만들어 낸다.

var array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log("함수의 반환값으로 새로운 배열을 만들어 낸다.",map1);

//배열에 들어있는 숫자들의 제곱근을 구하여 새로운 배열로 만들기
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log("제곱근으로 새로운 배열 만들기", roots);

//map을 활용해 배열 속 객체를 재구성하기
var kvArray = [{key:1, value:10},{key:2, value:20},{key:3, value:30}];

var reformattedArray = kvArray.map(function(obj){
  var rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});
console.log("배열 속 객체 재구성하기", reformattedArray);

//인자를 받는 함수를 사용하여 숫자 배열 재구성하기
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num){
      return num * 2;
});
console.log("인자를 받는 함수 사용하여 숫자 배열 재구성", doubles);

//map을 포괄적으로 사용하기
var map = Array.prototype.map;
var a = map.call('hello world', function(x){
    return x.charCodeAt(0);
});

//map을 포괄적으로 사용하기 (querySelectorAll)
var elems = document.querySelectorAll('select option:checked');
var values = [].map.call(elems, function(obj){
  return obj.value;
  console.log(obj.value);
});

//배열의 값, 값의 인덱스, 그리고 배열
function returnInt(element) {
  return parseInt(element, 10);
}

['1','2','3'].map(returnInt); //[1, 2, 3]
//실제 결과가 예상한 대로 배열의 숫자와 같다.

['1','2','3'].map(str => parseInt(str));

['1','2','3'].map(Number); // [1, 2, 3]

[]['1.1','2.2e2','3e300'].map(Number); [1.1, 220, 3e+300]
