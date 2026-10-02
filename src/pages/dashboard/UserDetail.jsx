import { useParams } from "react-router";

function UserDetail(){
    const { userID } = useParams();

    return(
        <div>
            <h2>Profil Pengguna</h2>
            <p>User ID: <strong>{userID}</strong></p>
            <p>Username: </p>
        </div>
    )
}

export default UserDetail;