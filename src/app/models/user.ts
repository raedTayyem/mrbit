export interface User {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  coins: number;
  password: string;
  moves: [
    {
      toId: string;
      to: string;
      at: number;
      amount: number;
    }
  ];
}
