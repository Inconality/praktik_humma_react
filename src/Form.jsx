import { useState } from "react"

function Form(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [desc, setDesc] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(e){
        setName(e.target.value)
    }
    function handleQuantityChange(e){
        setQuantity(e.target.value)
    }
    function handleDescChange(e){
        setDesc(e.target.value)
    }
    function handlePaymentChange(e){
        setPayment(e.target.value)
    }
    function handleShippingChange(e){
        setShipping(e.target.value)
    }

    return(
        <div>
            <p>Nama: {name}</p>
            <input value={name} onChange={handleNameChange} type="text"/>

            <p>Kuantitas: {quantity}</p>
            <input value={quantity} onChange={handleQuantityChange} type="number"/>

            <p>Deskripsi: {desc}</p>
            <textarea value={desc} onChange={handleDescChange} type="text" placeholder="Enter delivery instructions."/>

            <p>Pembayaran: {payment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option.</option>
                <option value="Dana">Dana</option>
                <option value="Mandiri">Mandiri</option>
            </select>
            
            <p>Pengiriman: {shipping}</p>
            <label>
                <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange}/>Pick up
            </label><br/>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>Delivery
            </label>
        </div>
    );
}

export default Form