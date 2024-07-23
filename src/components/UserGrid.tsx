import React, {FunctionComponent, useState} from "react";
import {UserCard} from "./UserCard";
import {User} from "../common/types/User";
import "./UserGrid.css";
import {mockUsers} from "../common/Constants";

export const UserGrid: FunctionComponent<any> = () => {
    const [users, setUsers] = useState(mockUsers);
    return (
        <div data-testid={"grid-layout"} className="user-grid">
            {users.map((user: User) => (
                <UserCard key={user.id} user={user}/>
            ))}
        </div>
    );
};