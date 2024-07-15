import React, {useEffect, useState} from "react";
import {User} from "../types/User";

interface UserFormProps {
    user: User | null;
    onSave: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onSave }) => {
    const [formState, setFormState] = useState<User>({
        id: 0,
        name: "",
        email: "",
        role: ""
    });

    useEffect(() => {
        if (user) {
            setFormState(user);
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formState.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formState.email} onChange={handleChange} />
            </label>
            <label>
                Role:
                <input type="text" name="role" value={formState.role} onChange={handleChange} />
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export default UserForm;
