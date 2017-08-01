import { Injectable } from '@angular/core';

export interface INewUser {
  id: number;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  birthday?: Date;
}
export interface ILoginUser {
  email: string;
  password: string;
}
@Injectable()
export class User {

  constructor() { }

  add(userData: INewUser) {
    let usersList = this.getAll();
    let userExist = false;
    if (usersList.length) {
      userExist = usersList.some((user) => {
        return user.email === userData.email;
      });
    }
    if (!userExist) {
      userData.id = usersList.length + 1;
      usersList.push(userData);
      localStorage.setItem("users", JSON.stringify(usersList));
      const auth = this.authorize(userData.email);
      return { status: 'ok', auth: auth, message: '' }
    } else {
      return { status: 'error', auth: { status: 'failed' }, message: 'user exist' }
    }
  }

  login(loginData: ILoginUser) {
    let usersList = this.getAll();
    let dataCorrect = false;
    if (usersList.length) {
      dataCorrect = usersList.some((user) => {
        return (user.email === loginData.email && user.password === loginData.password);
      });
    }
    if (dataCorrect) {
      const auth = this.authorize(loginData.email);
      return { status: 'ok', message: '' }
    } else {
      return { status: 'error', message: 'auth failed' }
    }
  }

  authorize(email: string) {
    const currentUserExist = localStorage.getItem("currentUser") || false;
    if (!currentUserExist) {
      localStorage.setItem('currentUser', email);
      return { status: 'ok' };
    } else {
      return { status: 'error', message: 'previous session was not finished' };
    }
  }

  getPass(email) {
    let usersList = this.getAll();
    let currentUser = this.findByEmail(email);
    if (currentUser) {
      return currentUser.password
    } else {
      return false;
    }
  }

  getAll() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }

  findByEmail(email) {
    let usersList = this.getAll();
    let currentUser: INewUser = usersList.find((user: INewUser) => {
      if (user.email === email) {
        return user;
      }
    });
    return currentUser;
  }

  update(userData: INewUser, email: string) {
    let usersList = this.getAll();
    let currentUser = this.findByEmail(email);
    let id: number;
    for (let i = 0; i < usersList.length; i++) {
      if (usersList[i].email === email) {
        id = i;
      }
    }
    if (id !== undefined) {
      userData.email = email;
      usersList[id] = userData;
      localStorage.setItem("users", JSON.stringify(usersList));
    }
  }
}
