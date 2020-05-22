
// 4.1 Эллипс
function ellipse() {
    let a = window.prompt("Введите длину большей полуоси эллипса", "");
    let b = window.prompt("Введите длину меньшей полуоси эллипса", "");

    if (a > 0 && b > 0) {
      window.alert("Ответ: Площадь эллипса - " + a * b * Math.PI);
    } else {
      window.alert("Введены неверные данные.Попробуйте снова!");
    }
}


//  4.2 Последовательность
function sequence() {
  let x = window.prompt("Введите X", "");
  let sum = 0;
  for(let i = 3, step = 4, degree = 6; i < 13; i++, step++, degree+=step ){
    sum += Math.pow(x, degree) / Math.pow(2, i);
  } 
  window.alert("Ответ - " + sum);
}

// 4.3 Массивы

let count1 = 0;
let count2 = 0;
let num = 0;
let matrice = new Array(8);
for (let i = 0; i < 8; i++) {
  matrice[i] = new Array(8);
  for (let j = 0; j < 8; j++) {
    matrice[i][j] = GetRandomInt(-10, 10);
    if (matrice[i][j] >= 0){
      count1++;
    }
  }
  if(count1 > count2){
    count2 = count1;
    num = i;
  }
}

function print_mas(){
  for (let i = 0; i < 8; i++) {
    console.log(matrice[i]);
  }
}

function mas_change() {
  let tmp = 0;
  for (let i = 0; i < 8; i++) {
    tmp = matrice[i][i]
    matrice[i][i] = matrice[num][i];
    matrice[num][i] = tmp;
  }
  print_mas();
}

// 4.4 Функции

function GetRandomInt(max, min) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function getArray(n){
  let array = new Array(n);
  for (let i = 0; i < n; i++) {
    array[i] = GetRandomInt(0, 10);
  }
  return array
}

function getResultArray(a, b) {
    return a.sort((a, b) => a - b)
}

//  Квадратная матрица

let table = document.querySelector('#table');
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]; /* n = 3 */
arr = getResultArray(arr);
fillTable(table, arr);

function fillTable(table, arr) {
  let n = Math.sqrt(arr.length);
  let matrice2 = new Array(n);
  let iter = 0;

  for (let i = 0; i < n; i++) {
      matrice2[i] = new Array(n);
        for (let j = 0; j < n; j++) {
          matrice2[i][j] = n;
      }
  }
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      matrice2[i][j] = arr[iter];
      iter++;
    }
    if ((i + 1) % 2 == 0){
      matrice2[i] = matrice2[i].reverse();
    }
  }
  matrice2 = matrice2.reverse()
for (let i = 0; i < n; i++) {
      let tr = document.createElement('tr');
      for (let j = 0; j < n; j++) {
        let td = document.createElement('td');
        td.innerHTML = matrice2[i][j];
        tr.appendChild(td);
        }
    table.appendChild(tr);
  }
}
