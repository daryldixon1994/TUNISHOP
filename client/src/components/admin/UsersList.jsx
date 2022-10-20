import React, { useEffect, useState } from "react";
import axios from "axios";
import UserItem from "./UserItem";
import { BeatLoader } from "react-spinners";
import "./style.css";
function UsersList() {
    const [users, setUsers] = useState();
    useEffect(() => {
        axios
            .get("/api/admin/users")
            .then((res) => setUsers(res.data.data))
            .catch((err) => console.dir(err));
    }, [users]);

    return (
        <div>
            {users ? (
                <div id="users-list-container">
                    {users.map((user) => {
                        return <UserItem key={user._id} {...user} />;
                    })}
                </div>
            ) : (
                <div id="spinner">
                    <BeatLoader
                        color="#4c4c4c"
                        margin={9}
                        size={30}
                        speedMultiplier={1}
                    />
                </div>
            )}
        </div>
    );
}

export default UsersList;
