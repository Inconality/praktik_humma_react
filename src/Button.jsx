function Button(){
    let count = 0;

    const handleClick = () => {
        if(count < 4){
            count++;
            console.log(`You clicked me ${count} time/s`);
        }else if(count < 10){
            count++;
            console.log(`Ok thats enough, you already clicked me ${count} time/s`);
        }else{
            console.log('Seriously, stop it.');
        }
    };

    return(<button onClick={() => handleClick()}>Click here</button>);
}

export default Button
