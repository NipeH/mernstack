import React, { Component, useState, useEffect, version } from "react";
//import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Title from './Title';



export default function List() {
    
    //fetch user data from database

    const [users, setUsers] = useState([]);
    const URL = 'http://localhost:5000/users';

    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then((users) => setUsers(users.data))
        .catch((error) => console.error(error))
        console.log(users);
    }, []);

    /* const usernames = users.map(user => user.username);

    console.log(usernames);
 */
    

    //fetch exercise data from database





    return (
        <React.Fragment>
            <h1>List from components/List.js</h1>
            <Title>List of exercises</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>User</TableCell>
                        <TableCell>Exercise</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                   
                        <TableRow >
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </React.Fragment>
    );
}