// POINT DOMとイベントリスナ
const h1Element = document.querySelector('h1');
/*console.dir(h1Element);
console.log(h1Element.textContent);*/
h1Element.textContent = '変更後のタイトル';

const btnEl = document.querySelector('button');
const helloFn = (e) => {
    console.log(e.target.textContent); // ボタンのテキストをコンソール出力
    // ボタンの色を変更する処理
    e.target.style.backgroundColor = "blue"; // 背景色を青に変更
    e.target.style.color = "white";          // テキスト色を白に変更
};
btnEl.addEventListener('click', helloFn);

/*
// POINT DOMとイベントリスナ
const h1Element = document.querySelector('h1');
h1Element.textContent = '変更後のタイトル'; // タイトルを変更

const btnEl = document.querySelector('button');
btnEl.addEventListener('click', () => {
  console.log(btnEl.textContent); // ボタンのテキストをログ出力
  btnEl.style.backgroundColor = "blue"; // 背景色を青に変更
  btnEl.style.color = "white";          // テキスト色を白に変更
});

*/