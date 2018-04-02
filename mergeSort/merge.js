let arr = [];

while ( addNumberForArr() ) {
    addNumberForArr();
}

alert(getMergeSort(arr));

function addNumberForArr() {
    let num = prompt('Создаем массив для сортировки, введите число','');
    if( typeof num === 'string' && num !== ''){
        return arr.push( +num );
    }
    return false;
}

/*
let arr = [2,3,4,5,8,7,6,0];

getMergeSort(arr);*/

function getMergeSort(arr) {
    showResult(arr, 'parent');
    let newArr = arr.slice(); //копируем массив чтоб не ломать начальные данные

    if(newArr.length <=1 ){ // проверка, если массив состоит из 1 аргумента - не выполнять сортировку
        return newArr
    }

    return separationArrays(newArr); // выполнить сортировку методом слияния
}

/*МЕТОД СОРТИРОВКИ СЛИЯНИЕМ*/
/*функция слияния 2-х массивов*/
function compareArguments(arrA,arrB, pushInArr) {
    while (arrA.length > 0 || arrB.length > 0) {
        if ( arrA[0] === undefined ) {
            while (arrB[0] > 0 ) {
                pushInArr.push(arrB[0]);
                arrB.splice(0,1);
            }
            showResult(pushInArr, 'after');
            return pushInArr;
        } else if ( arrB[0] === undefined) {
            while ( arrA[0] > 0 ) {
                pushInArr.push(arrA[0]);
                arrA.splice(0,1);
            }
            showResult(pushInArr, 'after');
            return pushInArr;
        }
        if( arrA[0] > arrB[0] ){
            pushInArr.push(arrB[0]);
            arrB.splice(0,1);
        } else {
            pushInArr.push(arrA[0]);
            arrA.splice(0,1);
        }
    }
    showResult(pushInArr, 'after');
    return pushInArr
}

/*функция по разбиению массива на 2-а по середине*/
function separationArrays(arr) {
    if(arr.length > 1){
        let arrA = arr.slice( 0, Math.floor(arr.length / 2) );
        let arrB = arr.slice(Math.floor(arr.length / 2), arr.length);
        let result = [];

        return compareArguments( giveOneArgument(arrA), giveOneArgument(arrB), result )

    }
}

/*проверка на случай нечетного массива, возвращает массив из 1-го аргумента*/
function giveOneArgument(arr) {
    if(arr.length > 1){
        return separationArrays(arr)
    }
    showResult(arr, 'before');
    return arr
}

function showResult(arr, className) {
    let arrNew = arr.slice();
    let div = document.createElement('div');
    div.innerText = arrNew.slice();
    div.className = className;

    if(className === 'before'){
        div.style.backgroundColor = 'red';
    }
    if(className === 'after'){
        div.style.backgroundColor = 'green';
    }
    if(className === 'parent'){
        div.style.backgroundColor = 'yellow';
    }

    div.style.textAlign = 'center';

    return document.body.appendChild(div);
}