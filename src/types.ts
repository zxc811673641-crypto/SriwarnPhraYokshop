export type Language = 'th' | 'en';

export interface MaterialCategory {
  id: string;
  name: { th: string; en: string };
  meaning: { th: string; en: string };
  image: string;
}

export interface Product {
  id: string;
  name: { th: string; en: string };
  price: number;
  image: string;
  tag?: { th: string; en: string };
}

export interface ContactBranch {
  id: string;
  name: { th: string; en: string };
  address: { th: string; en: string };
  postalCode: string;
  phone: string[];
  facebook: string;
  service: { th: string; en: string };
}
