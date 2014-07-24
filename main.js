function summa(x){
    return(x<1)?0:summa(x-1)+x;
}

summa(10)


var greeting = document.querySelector('#greeting');
greeting.innerText = summa(10);
