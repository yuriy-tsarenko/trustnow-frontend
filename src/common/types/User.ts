export interface User {
    id: string;
    username: string;
    firstName: string;
    middleName: string;
    lastName: string;
    lastLogin: Date;
    lastLoginIpAddress: string;
    loginApp: string;
    lockoutTimeTo: Date;
    email: string;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    isActive: boolean;
    roles: Set<string>;
}
