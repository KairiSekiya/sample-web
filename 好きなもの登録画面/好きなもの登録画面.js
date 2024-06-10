'use strict'

//チェックボックスの選択可能数に上限を設ける
///////////////////////////////
// let check_number = 3;
let check_box = document.getElementsByName('photo_n');
// let photo_1 = document.getElementById('photo_1');

// function check_box_count() {
//   let count = 0;
//   if (check_box.checked) {
//     count = count + 1;
//   }

//   if (count > check_number) {
//     alert('最大３つまで選択可能')
//   }
// }


check_box.addEventListener(
  'change',
  function () {
    alert(1);
  }
);

// alert(3);
///////////////////////////////