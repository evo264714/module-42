// alert('How are you')

const showAlert = () =>{
    alert('This is an alert of your Browser')
}
const landMoney = () =>{
    const result = confirm('Lend money')
    console.log(result);
    if(result === true){
        alert('Friend')
    }
    else{
        console.log('Not friend');
    }
}

const getInfo = () =>{
    //alert
    //confirm
    const name = prompt('tell me your name');
    console.log(name);
    if(name === null){
        alert('No name')
    }
    else{
        console.log(name, 'Welcome to this world');
    }
}