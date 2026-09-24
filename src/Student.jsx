function Student(props){

    return(
        <div className="student">
            <p>Nama: {props.nama}</p>
            <p>Usia: {props.usia} Tahun</p>
            <p>Tanggal Lahir: {props.lahir}</p>
            <p>Masuk Produk? {props.masukProduk ? "Sudah" : "Belum"}</p>
        </div>
    );
}

export default Student
