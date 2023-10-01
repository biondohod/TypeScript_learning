document.addEventListener('click', (e) : void => {
    const coords : number[] = [e.clientX, e.clientY];
    console.log(`Point is ${coords[0]}, ${coords[1]}`);
});

//Ошбка заключалась в том, что неправильно получались координаты мыши.
// Вместо pageX и pageY нужно было использовать clientX и clientY.

