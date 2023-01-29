import axios from 'axios';
import React from 'react';

const UsersList = ({ usersList, selectUser, getUsers }) => {

    const userListOrd = usersList.sort((a, b) => a.first_name.localeCompare(b.first_name));

    const deleteUser = (user) => {
        axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
            .then(() => getUsers())
    }

    return (
        <div>
            <ul>
                {
                    userListOrd.map(user => (
                        <li key={user.id} className="user-list">
                            <button onClick={() => selectUser(user)}>
                                select
                            </button>
                            <button onClick={() => deleteUser(user)}>
                                Delete
                            </button>
                            <h4 className='user-list-name'>{user.first_name} {user.last_name}</h4>
                            <ul className='user-list-li'>
                                <li><b>Correo: </b>{user.email}</li>
                                <li><b>Constraseña: </b>{user.password}</li>
                                <li><b>Fecha de cumpleaños: </b>{user.birthday}</li>
                            </ul>

                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;