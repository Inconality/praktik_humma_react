function Greeting({isLoggedin = false, username = "Guest"}){
    
    // Dengan if else
    // if(isLoggedin){
    //     return <h2>Welcome and Good Evening {username}!</h2>
    // }else{
    //     return <h2>Please log in to continue.</h2>
    // }

    // Dengan Operator Ternary
    return(isLoggedin ?     <h2>Welcome and Good Evening {username}!</h2> :
                            <h2>Please log in to continue.</h2>);

}

export default Greeting
