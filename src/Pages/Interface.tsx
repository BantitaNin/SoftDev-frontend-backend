
export interface EventData {
  
  id: string;
  created_at: string;
  name: string;
  PhotoUrl: string;
  price: number;
  TicketNum: number;
  Start: string;
  End: string;
  
}

export interface UserData {


  
  user_id:string;
  created_at: string;
  username: string;
  name: string;
  password: string;
  role: string;
  
}

export interface Employ{

  buyer_id: string;

  Concert_name: string;
  
  reciever_id: string ;

  TicketNum:number;
}

export interface GetHiringByBuyerId {

  id: number,
  created_a: string,
  Ticketpay: number,
  TicketNum: number,
  buyer_id: number,
  reciever_id: number,
  Concert_id: number,
  Accepting: false
}