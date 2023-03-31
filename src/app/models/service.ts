export interface Service {
  uid: string;
  userid: string;
  title: string;
  description: string;
  imgs: [];
  ratings: number;
  category: string;
  isFeatured?: boolean;
  servedCustomers: number;
  sales: number;
  inProgressOrders: number;
  deliveryDuration: string;
  completedOreders: number;
  addons: [];
}
