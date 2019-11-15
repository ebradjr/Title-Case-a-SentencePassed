function titleCase(str) {
    let arr = str.split(' ');
    let arrfirst = [];
    let arrlast = [];
    let fLetter = [];
    let arrnext = [];
    let done = '';
   
    for (let i = 0; i < arr.length; i++) {
        arrfirst.push(arr[i][0].toUpperCase());
        arrlast.push(arr[i].slice(1).toLowerCase());
    }
   

    for (let i = 0; i < arrlast.length; i++) {
        fLetter = arrfirst.shift()
        arrnext.push(fLetter + arrlast[i]);
        done = arrnext.join(' ')
             
    }
    return done;
    console.log(done);

}

titleCase("I'm a little tea pot");
  