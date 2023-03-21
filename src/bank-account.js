//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
  }

  open() {
    this.total = 0;
  }

  close() {
    throw new Error("Remove this statement and implement this function");
  }

  deposit(monto) {
    this.total=this.total+monto;
  }

  withdraw(monto) {
    this.total=this.total-50;
  }

  get balance() {
    return this.total;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
