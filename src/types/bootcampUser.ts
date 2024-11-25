export interface userCall {
  date: number;
  note: string;
  id: string;
}

export interface bootcampUser {
  id: number;
  name: string;
  phone: string;
  discount: string;
  date: string;
  bootcampTitle: string;
  result: string;
  callResult: string;
  calls: userCall[];
  isPaid: number;
  transactionId: string;
  paymentToken: string;
  amount: string;
  accessToken: string;
  isVerified: string;
  isSettle: string;
  isCanceled: string;
  isTidUsed: number;
  kelaasor_eligible: number;
}
