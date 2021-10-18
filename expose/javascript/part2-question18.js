function time() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  
let myVar = setInterval(time, 1000);