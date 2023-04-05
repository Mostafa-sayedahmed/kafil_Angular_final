export interface Service {
  userid?: string;
  title?: string;
  description?: string;
  category?: string;
  price?: number;
  mainImg?: string;
  imgs?: string[];
  deliveryDuration?: string;
  buyerinstructions?: string;
  addons?: Addon[];
  isfeatured?: boolean;
  isaproved?: boolean;
  rating?: 0;
  orderscount?: 0;
}

export interface Addon {
  addonTitle?: string;
  addonPrice?: number;
  addonDeliveryDuration?: string;
}
