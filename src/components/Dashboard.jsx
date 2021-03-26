import React, { useState, useEffect } from 'react'
import UserService from "../services/UserService";
import UserPage from "./UserPage";

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        retrieveUsers();
    }, [users]);

/// all users and have a map of them. 
// within that map use the coin logic 

    const retrieveUsers = () => {
        UserService.getAll()
        .then(response => {
           //console.log(response.data, "RES . DATA -----------------")
            setUsers(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    return (
        <div className="charts">
        {users.map((user) => {
        return (
        <UserPage key={user.id} user={user.name} coin={user.coins}></UserPage>)
        })}
        </div>
    );
};

export default Dashboard;
