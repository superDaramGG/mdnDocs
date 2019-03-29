var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element){
    return element > 10;
});

console.log(found);

//콜백 함수가 참을 반환 할 때까지 해당 해별의 각 요소에 대해서 콜백 함수를 실행한다.
//만약 어떤 요소를 찾으면 값을 즉시 반환하고, 그렇지 않으면 undefined를 반환한다.

//속성 중 하나를 사용하여 배열에서 객체 찾기
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit){
  return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries));

//화살표 함수 사용하기
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

const result = inventory.find(fruit => fruit.name === 'cherries');
console.log(result);

//탐색 중 삭제된 배열 요소
//삭제되어 존재하지 않는 배열의 요소에도 callback이 호출되어 해당 시점의 값이
//callback에 전달되어서 보여진다.

//선언된 배열중에서 인덱스 2,3,4가 없는 경우
var a = [0,1,,,,5,6];

//모든 인덱스를 보여준다.
a.find(function(value, index){
    console.log('방문자수'+index+'값'+value);
});

//모든 인덱스를 보여준다, 삭제된 것들도 포함해서
a.find(function(value, index){
  if(index === 0){
    console.log('Deleting a[5] with value' + a[5]);
    delete a[5];
  }
  console.log('Visited index'+index+'with value'+value);
})
