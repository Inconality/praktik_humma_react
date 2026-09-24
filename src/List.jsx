function List({items = [], kategori = "Placeholder"}){

    const listItems = items.map(item => <li key={item.id}>
                                            {item.nama}: &nbsp;
                                            <b>{item.kalori}</b> Kalori</li>);

    return(
    <>
        <h3 className="list-kategori">{kategori}</h3>
        <ol className="list-items">{listItems}</ol>
    </>);
}

export default List
