function Food() {
    const food1 = "Rendang";
    const food2 = "Soto";
    const food3 = "Burger";

    return(
        <div className="card">
            <h2 className="card-title">This is my favorite foods!</h2>
            <ul>
                <li>{food1}</li>
                <li>{food2}</li>
                <li>Mie Aceh</li>
                <li>{food3.toUpperCase()}</li>
            </ul>
        </div>
    );
}

export default Food
