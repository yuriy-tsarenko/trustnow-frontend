import React from "react";
import {User} from "../types/User";
import UserCard from "./UserCard";

interface UserListProps {
    users: User[];
    onEdit: (user: User) => void;
    onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
    return (
        <div className="user-list">
            {users.map(user => (
                <UserCard key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default UserList;
