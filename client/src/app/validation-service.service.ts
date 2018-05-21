import { Injectable } from '@angular/core';

@Injectable()
export class ValidationServiceService {

  constructor() { }
  validateRegister(user){
    if (user.name === undefined || user.email === undefined || user.password === undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re =  /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    return re.test(email);
  }
}
