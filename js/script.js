// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('button');
// let screenValue = '';
// for(item of buttons){
//   item.addEventListener('click', (e) =>{
//     buttonText = e.target.innerText;
//     console.log(buttonText);
//     screen.value += buttonText;
//     if(buttonText == 'X'){
//       buttonText = '*';

//     }else if(buttonText == '=')
//     // screen.value += buttonText;
//     // screen.value = screenValue;
//     screen.value = eval(screen.value);
//   })
// }



// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('button');
// let screenValue = '';
// for(item of buttons){
//   item.addEventListener('click', (e) =>{
//     buttonText = e.target.innerText;
//     console.log(buttonText);
//     screen.value += buttonText;
//     if(buttonText == 'X'){
//       buttonText = '*';

//     }else if(buttonText == '=') {
//       screen.value = eval(screen.value);
//     }
//   })
// }

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for(let item of buttons){
  item.addEventListener('click', (e) =>{
    buttonText = e.target.innerText;
    console.log(buttonText);
    screen.value += buttonText;
    if(buttonText == 'X'){
      buttonText = '*';
    }
    // else if(buttonText == '='){
    //   screenValue = screen.value;
    //   screen.value = eval(screenValue);
    // }
    // else if(buttonText =='C'){
    //   screen.value = screen.value.slice(0,-1);
    //   screenValue = '';
    // }
    else if(buttonText =='C'){
      screen.value = screenValue.substring(0, -1);
      screen.value = screenValue;
    }
    
    else if(buttonText == 'AC'){
      screen.value = '';
      screen.value = screenValue;
    }
  });
}

