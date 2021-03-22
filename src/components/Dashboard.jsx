import React, { useState, useEffect } from 'react'
import UserService from "../services/UserService";
import UserPage from "./UserPage";

const Dashboard = () => {

    const [users, setUsers] = useState([]);
    // const [coins, setCoins] = useState([]);

    useEffect(() => {
        retrieveUsers();
    }, []);

/// all users and have a map of them. 
// within that map use the coin logic 

    const retrieveUsers = () => {
        UserService.getAll()
        .then(response => {
            setUsers(response.data);
            // console.log("RESPONSE > DDATA ", response.data[1].coins);
        })
        .catch(e => {
            console.log(e);
        });
    };

    return (
        <div>
        {users.map((user) => {
        return (
        <UserPage key={user.id} user={user.email} coin={user.coins}></UserPage>)
        })}
        </div>
    );
};

export default Dashboard;
