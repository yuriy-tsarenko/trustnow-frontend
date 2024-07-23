import React, {FunctionComponent} from "react";
import {User} from "../common/types/User";
import {Avatar, FormControlLabel, Switch} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import "./UserCard.css";

interface UserCardProps {
    user: User;
}

export const UserCard: FunctionComponent<UserCardProps> = (props: UserCardProps) => {
    let displayName: string = props.user.firstName + " " + props.user.lastName.charAt(0) + ".";
    let email: string = props.user.email;

    const handleEditUser = (): void => {
        console.log("Edit user");
        alert("Edit user action");
    };

    const color: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "default" = props.user.isActive
        ? "info"
        : "error";
    const styledColor: "var(--switch-main-color-active)" | "var(--switch-main-color-disabled)" = props.user.isActive
        ? "var(--switch-main-color-active)"
        : "var(--switch-main-color-disabled)";

    let label: string = props.user.isActive
        ? "active"
        : "disabled";
    return (
        <div data-testid={"user-card-layout"} className="user-card p-4 border rounded">
            <div className="info-bar inline-flex gap-5 justify-items-start">
                <Avatar className="user-avatar" alt={displayName} src="UserAvatar"/>
                <div className="user-info">
                    <p className="display-name">{displayName}</p>
                    <p className="display-email">{email}</p>
                </div>
            </div>
            <div className="action-bar inline-flex gap-2 justify-end items-center pt-2">
                <FormControlLabel
                    control={<Switch style={{color: styledColor}} color={color} checked={props.user.isActive}/>}
                    label={label}
                />
                <SettingsIcon className={"card-icon"}
                              onClick={() => handleEditUser()}
                />
                <DeleteIcon className={"card-icon"}
                            onClick={() => handleEditUser()}
                />
            </div>
        </div>
    );
};
