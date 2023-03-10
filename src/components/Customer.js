import React from "react";

function Customer(props) {
    return (
        <>
            <CustomerProfile    image={props.image}
                                name={props.name}
                                id = {props.id} />

            <CustomerInformation    number={props.number}
            gender={props.gender}
            job={props.job} />
        </>
    )
}

function CustomerProfile(props) {
    return  (
        <>
            <h2>Profile</h2>
            <img src={props.image} alt="profile picture" />
            <p>{props.name}({props.id})</p>
        </>
    )
}

function CustomerInformation(props) {
    return  (
        <>
            <h2>Information</h2>
            <p>{props.number}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </>
    )
}

export default Customer;