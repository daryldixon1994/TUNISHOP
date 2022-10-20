import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
function UserItem({ fName, lName, phone, adresse, _id, isBanned }) {
    const handleBanUser = () => {
        swal({
            title: "Are you sure?",
            text: "this user will be banned!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willBann) => {
            if (willBann) {
                axios
                    .put(`/api/admin/banUser/${_id}`)
                    .then((res) =>
                        swal(res.data.message, {
                            icon: "success",
                        })
                    )
                    .catch((err) => console.dir(err));
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    };
    return (
        <div id={isBanned ? "user-item-container-banned" : "user-item-container"}>
            <h4>
                {fName} {lName}
            </h4>
            <h5> Phone: {phone} </h5>
            <h6> Adress: {adresse} </h6>
            <Button
                id="button"
                onClick={() => {
                    handleBanUser();
                }}
            >
                Ban user
            </Button>
        </div>
    );
}

export default UserItem;
