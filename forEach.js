
//forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행한다.

var array1 = ['a','b','c'];

array1.forEach(function(element){
    console.log(element);
});

//각 요소에 대해 오름차순으로 한 번씩 실행한다.
//삭제했거나 초기화하지 않은 인덱스 속성에 대해서는 실행하지 않는다
// 1. 요소 값, 2. 요소 인덱스, 3.순회 중인 배열

//for 반복문을 foreEach로 바꾸기
const items = ['item1', 'item2', 'item3'];
const copy = [];

for(let i=0; i<items.length; i++){
  copy.push(items[i]);
}

items.forEach(function(item){
  copy.push(item);
});

//배열 콘텐츠 출력
function logArrayElements(element, index, array) {
  console.log('a['+index+']=' + element);
}

[2, 5,, 9].forEach(logArrayElements);

//thisArg 사용
function Counter() {
  this.sum = 0;
  this.count = 0;
}

Counter.prototype.add = function(array){
  array.forEach(function(entry){
    this.sum += entry;
    ++this.count;
  }, this);
};

var obj = new Counter();
obj.add([2, 5, 9]);
obj.count;
obj.sum;

//thisArg 매개변수(this)를 forEach()에 제공했기에
//callback은 전달받은 this의 값을 자신의 this값으로 사용할 수 있다.

//객체 복사 함수

function copy(obj) {
  var copy = Object.create(Object.getPrototypeOf(obj));
  var propNames = Object.getOwnPropertyName(obj);

  propNames.forEach(function(name){
    var desc = Object.getOwnPropertyName(copy, name);
    Object.defineProperty(copy, name, desc);
  });
}

var obj1 = {a:1, b:2};
var obj2 = copy(obj1);

//반복 중에 배열이 변경되면 다른 요소들을 건너 뛸 수 있다

var words = ['one','two','three','four'];
words.forEach(function(wird))

words.forEsch(function(word){
  console.log(word);
  if(words === 'two') {
    words.shift
  }
})
