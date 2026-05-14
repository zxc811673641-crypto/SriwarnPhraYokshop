import { MaterialCategory, Product, ContactBranch } from './types';

export const MATERIALS: MaterialCategory[] = [
  {
    id: 'jade',
    name: { th: 'หินหยก', en: 'Jade' },
    meaning: { th: 'สื่อถึงความมั่งคั่ง สุขภาพดี และความร่มเย็นเป็นสุข', en: 'Symbol of wealth and longevity' },
    image: '/src/assets/images/regenerated_image_1778754585318.jpg',
  },
  {
    id: 'italy-marble',
    name: { th: 'หินอ่อนอิตาลี', en: 'Italy Marble' },
    meaning: { th: 'หินสีขาวบริสุทธิ์ เนื้อละเอียด เงางาม สื่อถึงความสว่างไสวและความหลุดพ้น', en: 'Pure white, fine-textured, and elegant; symbolizes enlightenment and purity' },
    image: '/src/assets/images/regenerated_image_1778754511695.jpg',
  },
  {
    id: 'petrified-wood',
    name: { th: 'ไม้กลายเป็นหิน', en: 'Petrified Wood' },
    meaning: { th: 'สัญลักษณ์แห่งความอายุยืน ความมั่นคง และการปกป้องคุ้มครอง', en: 'Symbol of longevity, stability, and protection' },
    image: '/src/assets/images/regenerated_image_1778754512539.jpg',
  },
  {
    id: 'lapis-lazuli',
    name: { th: 'ลาพิส ลาซูลี', en: 'Lapis Lazuli' },
    meaning: { th: 'หินแห่งภูมิปัญญา ความอุดมสมบูรณ์ และเกียรติยศ', en: 'Stone of wisdom, abundance, and royalty' },
    image: '/src/assets/images/regenerated_image_1778754513838.jpg',
  },
  {
    id: 'lek-lai',
    name: { th: 'แร่เหล็กไหล', en: 'Lek Lai / Sacred Metal' },
    meaning: { th: 'ธาตุกายสิทธิ์ตามความเชื่อ ช่วยปกป้องคุ้มครองและแคล้วคลาด', en: 'A sacred substance believed to provide protection and safety' },
    image: '/src/assets/images/regenerated_image_1778754515087.jpg',
  },
  {
    id: 'crystal',
    name: { th: 'คริสตัล', en: 'Crystal / Clear Quartz' },
    meaning: { th: 'ช่วยรวมสมาธิ พลังงานบริสุทธิ์ และความสมปรารถนา', en: 'Focuses energy, purity, and brings good fortune' },
    image: '/src/assets/images/regenerated_image_1778754517535.jpg',
  },
  {
    id: 'rose-quartz',
    name: { th: 'โรสควอตซ์', en: 'Rose Quartz' },
    meaning: { th: 'หินแห่งความรัก การให้อภัย และความเมตตาปราณี', en: 'The stone of universal love, compassion, and harmony' },
    image: '/src/assets/images/regenerated_image_1778754520030.jpg',
  },
  {
    id: 'aventurine',
    name: { th: 'อเวนเจอรีน', en: 'Aventurine' },
    meaning: { th: 'หินแห่งความโชคดี โอกาส และความรุ่งเรือง', en: 'The stone of opportunity, prosperity, and good luck' },
    image: '/src/assets/images/regenerated_image_1778754521037.jpg',
  },
  {
    id: 'amethyst',
    name: { th: 'อเมทิสต์', en: 'Amethyst' },
    meaning: { th: 'หินแห่งความสงบ การมีสติ และความสมดุลของจิตใจ', en: 'The stone of peace, mindfulness, and emotional balance' },
    image: '/src/assets/images/regenerated_image_1778754522121.jpg',
  },
  {
    id: 'tigers-eye',
    name: { th: 'ไทเกอร์อาย', en: "Tiger's Eye" },
    meaning: { th: 'หินแห่งความกล้าหาญ การปกป้อง และความมั่นคง', en: 'The stone of courage, protection, and grounding' },
    image: '/src/assets/images/regenerated_image_1778754523484.jpg',
  },
  {
    id: 'jasper',
    name: { th: 'แจสเปอร์', en: 'Jasper' },
    meaning: { th: 'หินแห่งการดูแลประพฤติ ความอดทน และความแข็งแกร่ง', en: 'The supreme nurturer, providing support and strength' },
    image: '/src/assets/images/regenerated_image_1778754524705.jpg',
  },
  {
    id: 'moonstone',
    name: { th: 'มูนสโตน', en: 'Moonstone' },
    meaning: { th: 'สื่อถึงความอุดมสมบูรณ์ ความรัก และการเริ่มต้นใหม่', en: 'Symbol of abundance, love, and new beginnings' },
    image: '/src/assets/images/regenerated_image_1778754525859.jpg',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'upagutta',
    name: { th: 'พระอุปคุตหินอินเดีย', en: 'India Stone Statue of Upagutta' },
    price: 18000,
    image: '/src/assets/images/regenerated_image_1778754962654.jpg',
  },
  {
    id: 'honey-onyx-buddha',
    name: { th: 'พระพุทธรูปหินน้ำผึ้ง', en: 'Honey Onyx Buddha Statue' },
    price: 20000,
    image: '/src/assets/images/regenerated_image_1778754965430.jpg',
  },
  {
    id: 'rose-quartz-buddha',
    name: { th: 'พระพุทธรูปหินโรสควอตซ์', en: 'Rose Quartz Buddha Statue' },
    price: 180000,
    image: '/src/assets/images/regenerated_image_1778754967398.jpg',
  },
  {
    id: 'naga-buddha',
    name: { th: 'พระนาคปรกหินอินเดีย', en: 'India Stone Statue of Naga-Covered Buddha' },
    price: 50000,
    image: '/src/assets/images/regenerated_image_1778754969994.jpg',
  },
  {
    id: 'lapis-buddha',
    name: { th: 'พระพุทธรูปหินลาพิส ลาซูลี', en: 'Lapis Lazuli Buddha Statue' },
    price: 80000,
    image: '/src/assets/images/regenerated_image_1778754973004.jpg',
  },
  {
    id: 'smoky-quartz-buddha',
    name: { th: 'พระพุทธรูปหินสโมกีควอตซ์', en: 'Smoky Quartz Buddha Statue' },
    price: 45000,
    image: '/src/assets/images/regenerated_image_1778754975868.jpg',
  },
  {
    id: 'emerald-buddha',
    name: { th: 'พระแก้วทรงเครื่องหินอินเดีย', en: 'India Stone Statue of the Emerald Buddha' },
    price: 70000,
    image: '/src/assets/images/regenerated_image_1778754978848.jpg',
  },
  {
    id: 'honey-onyx-blessing',
    name: { th: 'พระพุทธรูปหินน้ำผึ้งปางประทานพร', en: 'Honey Onyx Blessing Buddha' },
    price: 65000,
    image: '/src/assets/images/regenerated_image_1778754982152.jpg',
  },
  {
    id: 'natural-jade-buddha',
    name: { th: 'พระพุทธรูปหยกแท้', en: 'Natural Jade Buddha' },
    price: 150000,
    image: '/src/assets/images/regenerated_image_1778754985243.jpg',
  },
  {
    id: 'laughing-buddha',
    name: { th: 'พระสังกัจจายน์', en: 'Laughing Buddha' },
    price: 35000,
    image: '/src/assets/images/regenerated_image_1778754988109.jpg',
  },
];

export const NEW_PRODUCTS: Product[] = [
  {
    id: 'jade-bangles',
    name: { th: 'กำไลข้อมือหยก', en: 'Jade Bangles' },
    price: 500, // Range 100-500
    image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=400',
    tag: { th: 'เริ่มต้น 100 - 500 THB', en: 'From 100 - 500 THB' },
  },
  {
    id: 'jade-beads',
    name: { th: 'สร้อยประคำหยก', en: 'Jade Prayer Beads' },
    price: 700,
    image: 'https://images.unsplash.com/photo-1515201014167-9d7a2f2b3ec1?auto=format&fit=crop&q=80&w=400',
    tag: { th: 'เริ่มต้น 300 - 700 THB', en: 'From 300 - 700 THB' },
  },
];

export const CONTACTS: ContactBranch[] = [
  {
    id: 'mae-sai',
    name: { th: 'สาขาแม่สาย', en: 'Mae Sai Branch' },
    address: { th: '47/1 หมู่ 7 ต.แม่สาย อ.แม่สาย จ.เชียงราย', en: '47/1 Moo 7, Mae Sai Sub-district, Mae Sai District, Chiang Rai Province' },
    postalCode: '57130',
    phone: ['081-5303121', '061-9057435', '081-7165607'],
    facebook: 'Sriwarn Sriwong',
    service: { th: 'มีบริการจัดส่งทั่วประเทศไทย', en: 'Delivery service available throughout Thailand' },
  },
  {
    id: 'nong-khai',
    name: { th: 'สาขาหนองคาย', en: 'Nong Khai Branch' },
    address: { th: '439 หมู่ 7 ถ.ริมโขง ต.ในเมือง อ.เมืองหนองคาย จ.หนองคาย', en: '439 Moo 7, Rim Khong Road, Nai Mueang Sub-district, Mueang Nong Khai District, Nong Khai Province' },
    postalCode: '43000',
    phone: ['081-5303121', '061-9057435', '081-7165607'],
    facebook: 'Sriwarn Sriwong',
    service: { th: 'มีบริการจัดส่งทั่วประเทศไทย', en: 'Delivery service available throughout Thailand' },
  },
];
