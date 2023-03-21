//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.estado = false;
  }

  open() {
    if(this.estado==true) throw new ValueError();
    this.estado = true;
    this.total = 0;
  }

  close() {
    if(this.estado==false) throw new ValueError();
    this.estado = false;
  }

  deposit(monto) {
    if(this.estado==false) throw new ValueError();
    this.total=this.total+monto;
  }

  withdraw(monto) {
    if(this.estado==false) throw new ValueError();
    this.total=this.total-monto;
  }

  get balance() {
    if(this.estado==true)
      return this.total;
    else
      throw new ValueError();
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
