let str = "aaa@bbb@ccc";
let newStr = str.replace(/@/g,'!');
console.log(newStr);
//Второе задание
let str1 = "2025-12-31";
let newStr1 = str1.replace(/-/g,'/');
console.log(newStr1);
//Третее задание
let str2 = "Я учу javascript!";
console.log(str2.substr(2,14));
console.log(str2.substring(2,str2.length-1));
console.log(str2.slice(2,str2.length - 1));
//Четвёртое задание
let array = [4,2,5,19,13,0,10];
let sum = 0;
for(let i = 0; i < array.length; i++)
{
    sum += +Math.pow(array[i],3);
    array[i] = array[i + 1];
}
let koren = Math.sqrt(sum);
console.log(koren);
//Пятое задание
let a = prompt("Enter a:");
let b = prompt("Enter b:");
let c = a - b;
if(c <= 0)
{
    c = c * (-1);
}
console.log(c);
//Шестое задание
let date = new Date();
function getZero(num)
{
	if (num > 0 && num < 10) 
    { 
		return '0' + num;
	} 
    else 
    {
		return num;
	}
}

alert(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());
//Седьмое задание
let string = 'aa aba abba abbba abca abea';
console.log(string.replace(/ab+a/g, '!'));
//Восьмое задание
let regex;
function checkPhone(phone)
{
    
    regex = RegExp( /^\+(375|80)-(29|17|25|44)-\d{3}-\d{2}-\d{2}/g);
    
    let result = regex.test(phone)
    return result;
}
let phone = prompt('Enter the number of phone:');
console.log(checkPhone(phone));