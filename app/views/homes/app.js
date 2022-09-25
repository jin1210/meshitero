let hello ="Hello, World";
alert(hello);
let int1 = 1;
let int2 = -10;
let float1 = 3.14;
let strl = 'JacaScriptを覚えよう';
alert(4 + 3);
alert(8 - 5);
alert(2 * 6);
alert(10 / 2);
alert('Hello' + 'World')
let str1 = 'Hello';
let str2 = 'World!!';
alert(str1 + str2);
let orange = 100;
let apple = 120;
if(orange < apple){
  alert('みかんの値段がリンゴより安い');
} else if(orange == apple){
  alert('みかんとリンゴが同じ値段');
} else {
  alert('みかんの値段がリンゴより高い');
}
let max = 100;
let num = 1;
let count = 0;
while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

let i;
let num = 0;
for(i = 1; i < 11; i++){
  num = num + i;
}
alert('1から10まで足し算した結果は' + num + 'です');

for(i = 1; i < 11; i++){
  1 = 0 + 1
}

for(i = 2; i < 11; i++){
  3 = 1 + 2
}

for(i = 3; i < 11; i++){
  6 = 3 + 3
}

for(i = 4; i < 11; i++){
  10 = 6 + 4
}

function addString(strA){
  let addStr = "Hello" + strA;
  return addStr;
}

let alertString;
alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
  let addStr = "Hello" + strA;
  return addStr;
}

let promptStr = prompt('何か好きな文字を入力してください')
alert(promptStr);


let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');

alert('あなたの選んだ手は' + user_hand + 'です。');

function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 1)
  }
}