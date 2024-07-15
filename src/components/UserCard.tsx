import React from "react";
import {User} from "../types/User";

interface UserCardProps {
    user: User;
    onEdit: (user: User) => void;
    onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
    return (
        <div className="user-card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <button onClick={() => onEdit(user)}>Edit</button>
            <button onClick={() => onDelete(user.id)}>Delete</button>
        </div>
    );
};

export default UserCard;
