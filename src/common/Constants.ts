import {User} from "./types/User";

export const mockUsers: User[] = [
    {
        id: "1",
        username: "userone@gmail.com",
        firstName: "John",
        middleName: "A.",
        lastName: "Doe",
        lastLogin: new Date("2023-04-01T10:00:00Z"),
        lastLoginIpAddress: "192.168.1.1",
        loginApp: "AppA",
        lockoutTimeTo: new Date("2023-04-02T10:00:00Z"),
        email: "userone@gmail.com",
        isEmailVerified: true,
        isPhoneVerified: false,
        isActive: false,
        roles: new Set(["admin", "user"])
    },
    {
        id: "2",
        username: "userTwo@gmail.com",
        firstName: "Kate",
        middleName: "B.",
        lastName: "Smith",
        lastLogin: new Date("2023-04-03T11:00:00Z"),
        lastLoginIpAddress: "192.168.1.2",
        loginApp: "AppB",
        lockoutTimeTo: new Date("2023-04-04T11:00:00Z"),
        email: "userTwo@gmail.com",
        isEmailVerified: false,
        isPhoneVerified: true,
        isActive: false,
        roles: new Set(["user"])
    },
    {
        id: "3",
        username: "userThree@gmail.com",
        firstName: "Alice",
        middleName: "C.",
        lastName: "Johnson",
        lastLogin: new Date("2023-04-05T12:00:00Z"),
        lastLoginIpAddress: "192.168.1.3",
        loginApp: "AppC",
        lockoutTimeTo: new Date("2023-04-06T12:00:00Z"),
        email: "userThree@gmail.com",
        isEmailVerified: true,
        isPhoneVerified: true,
        isActive: true,
        roles: new Set(["editor", "user"])
    },
    {
        id: "4",
        username: "userfour@gmail.com",
        firstName: "Bob",
        middleName: "D.",
        lastName: "Brown",
        lastLogin: new Date("2023-04-07T13:00:00Z"),
        lastLoginIpAddress: "192.168.1.4",
        loginApp: "AppD",
        lockoutTimeTo: new Date("2023-04-08T13:00:00Z"),
        email: "userfour@gmail.com",
        isEmailVerified: false,
        isPhoneVerified: false,
        isActive: false,
        roles: new Set(["user"])
    },
    {
        id: "5",
        username: "userfive@gmail.com",
        firstName: "Eve",
        middleName: "E.",
        lastName: "White",
        lastLogin: new Date("2023-04-09T14:00:00Z"),
        lastLoginIpAddress: "",
        loginApp: "AppE",
        lockoutTimeTo: new Date("2023-04-10T14:00:00Z"),
        email: "userfive@gmail.com",
        isEmailVerified: true,
        isPhoneVerified: true,
        isActive: true,
        roles: new Set(["user"])
    }
];