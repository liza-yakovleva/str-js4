// TODO Завдання.Написати функцію яка приймає два параметри rangeNumbers(a, b) і виводить непарні числа від a до b.Зробити перевірку щоб b було більше a.
let odd;

function rangeNumbers(a, b) {
  if (b > a) {
    a % 2 === 1 ? odd = a : odd = a + 1;
    while (odd <= b) {
      console.log(odd);
      odd += 2;
    }
  } else {
    console.log("Не вірно... b повино бути більше а");
  }
}
rangeNumbers(3, 12);
rangeNumbers(27, 35);
rangeNumbers(4, 4);