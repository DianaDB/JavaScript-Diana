value = prompt("введите значсение");
alert(value)
if (typeof value!=='number'){
    console.log ("Упс, кажется, вы ошиблись")
}else if (isNaN(value)){
    console.log ("Упс, кажется, вы ошиблись")
}else if (value % 2 !==0){
    console.log("Вы ввели нечетное число")
}else {
    console.log("Вы ввели четное число")
}
