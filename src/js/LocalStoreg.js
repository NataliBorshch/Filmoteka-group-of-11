
export function localStorageW(event,film , arrayIdW ,btnWatch){
    let indexW = 0;
    if (event.target.textContent === 'remove to watch'){
        console.log('Надо удалить такое уже есть ')
        getIndex(arrayIdW, film , btnWatch)
    }

    else{
        arrayIdW.push(film)
        let watchedStr = JSON.stringify(arrayIdW)
        event.target.textContent = 'remove to watch';
        localStorage.setItem(`w`, watchedStr)
    }

}



function getIndex(arrayIdW, film,btnWatch){
    console.log(arrayIdW)
    let indexW = 0;
    
    arrayIdW.forEach((elem,index) => {
        if (elem.id === film.id ){
            console.dir(btnWatch)
            btnWatch.textContent = 'remove to watch';
            indexW = index;  
        }
        return indexW;
    });

 console.log(indexW)
}