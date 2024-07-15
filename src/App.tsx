import React, {useState} from "react";
import {User} from "./types/User";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import "./App.css";

const App: React.FC = () => {
    const initialUsers: User[] = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
        { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
        { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Moderator" }
    ];

    const [users, setUsers] = useState<User[]>(initialUsers);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    const handleSaveUser = (user: User) => {
        if (editingUser) {
            setUsers(users.map(u => (u.id === user.id ? user : u)));
        } else {
            setUsers([...users, { ...user, id: Date.now() }]);
        }
        setEditingUser(null);
    };

    const handleEditUser = (user: User) => {
        setEditingUser(user);
    };

    const handleDeleteUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="app">
            <h1>User Manager Dashboard</h1>
            <UserForm user={editingUser} onSave={handleSaveUser} />
            <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
        </div>
    );
};

export default App;
