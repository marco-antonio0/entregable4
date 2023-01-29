import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({ getUsers, userSelect, selectUser }) => {

    const { handleSubmit, register, reset } = useForm()

    const emptyUser = { first_name: "", last_name: "", email: "", password: "",birthday: "" }

    useEffect(() => {
        if (userSelect !== null) {
            reset(userSelect)
        } else {
            reset(emptyUser)
        }
    }, [userSelect])

    const submit = (data) => {
        console.log(userSelect)
        if (userSelect) {
            axios.put(`https://users-crud.academlo.tech/users/${userSelect.id}/`, data)
                .then(() => {
                    getUsers()
                    selectUser(null)
                });
        } else {
            axios.post("https://users-crud.academlo.tech/users/", data)
                .then(() => {
                    getUsers()
                    reset(emptyUser)
                });
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="input-container">
                <label htmlFor="first_name">Nombre</label>
                <input
                    type="text"
                    id="first_name"
                    {...register("first_name")}
                />
            </div>
            <div className="input-container">
                <label htmlFor="last_name">Apellido</label>
                <input
                    type="text"
                    id="last_name"
                    {...register("last_name")}
                />
            </div>
            <div className="input-container">
                <label htmlFor="email">Email </label>
                <input
                    type="text"
                    id="email"
                    {...register("email")}
                />
            </div>
            <div className="input-container">
                <label htmlFor="password">Contraseña </label>
                <input
                    type="text"
                    id="password"
                    {...register("password")}
                />
            </div>
            <div className="input-container">
                <label htmlFor="birthday">Fecha de nacimiento</label>
                <input
                    type="date"
                    id="birthday"
                    {...register("birthday")}
                />
            </div>
            <button>submit</button>
        </form>
    );
};

export default UsersForm;