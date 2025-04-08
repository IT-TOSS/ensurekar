interface User {
    Fname: string;
    Lname: string;
    email: string;
    picture?: string;
    username?: string;
    given_name?: string;
    family_name?: string;
    verified_email?: boolean;
    isAuthenticated?: boolean;
    password?: string;
    contactNo?: string;
  }

export type {User}