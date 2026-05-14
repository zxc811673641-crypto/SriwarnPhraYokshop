import { motion } from 'motion/react';
import { useLanguage } from '../../LanguageContext';
import { NEW_PRODUCTS } from '../../constants';

export function NewProducts() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-stone-50 border-y border-stone-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-3 py-1 bg-stone-200 rounded-md text-gold-dark text-xs font-bold tracking-widest uppercase">
            {t('สินค้าใหม่', 'NEW ARRIVALS')}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-950">
            {t('สินค้าจากหยกและอัญมณี', 'Jade & Gemstone Accessories')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-square rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-white p-2">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img src="/src/assets/images/regenerated_image_1778755178230.jpg" alt="Jade Bangles" className="w-full h-full object-cover" />
                </div>
             </div>
             <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-stone-200 -mt-8 shadow-sm bg-white p-2">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img src="/src/assets/images/regenerated_image_1778755181257.jpg" alt="Rose Quartz Statue" className="w-full h-full object-cover" />
                </div>
             </div>
             <div className="grid grid-cols-2 gap-4 col-span-2">
                <div className="aspect-video rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-white p-2">
                    <div className="w-full h-full rounded-xl overflow-hidden">
                      <img src="/src/assets/images/regenerated_image_1778755184294.jpg" alt="Gua Sha Tool" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden border border-stone-200 -mt-12 shadow-sm bg-white p-2">
                    <div className="w-full h-full rounded-xl overflow-hidden">
                      <img src="/src/assets/images/regenerated_image_1778755187206.jpg" alt="Sacred Stone" className="w-full h-full object-cover" />
                    </div>
                </div>
             </div>
          </div>

          <div className="space-y-12">
            {NEW_PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex justify-between items-center border-b border-stone-300 pb-8 cursor-pointer hover:border-gold transition-colors"
              >
                <div className="space-y-1">
                  <h3 className="text-2xl font-serif text-stone-900 group-hover:text-gold transition-colors">
                    {t(product.name.th, product.name.en)}
                  </h3>
                  <p className="text-stone-500 text-sm italic">
                    {product.tag && t(product.tag.th, product.tag.en)}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-gold font-serif text-xl font-bold">
                     {product.price} THB
                  </span>
                </div>
              </motion.div>
            ))}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="p-6 rounded-2xl border border-stone-200 bg-white hover:border-gold transition-colors shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] group">
                   <div className="flex justify-between items-start mb-4">
                     <h4 className="text-stone-900 font-serif font-bold group-hover:text-gold transition-colors">{t('กัวซา หยก, อเวนเจอรีน', 'Gua sha Jade, Aventurine')}</h4>
                     <span className="text-gold font-bold text-sm">200 THB</span>
                   </div>
                   <p className="text-stone-500 text-xs italic">{t('หยกแท้จากธรรมชาติ ช่วยกระตุ้นการไหลเวียน', 'Natural jade for skin stimulation')}</p>
                </div>
                <div className="p-6 rounded-2xl border border-stone-200 bg-white hover:border-gold transition-colors shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] group">
                   <div className="flex justify-between items-start mb-4">
                     <h4 className="text-stone-900 font-serif font-bold group-hover:text-gold transition-colors">{t('เบาะนั่งหยก', 'Jade Stone Cushion')}</h4>
                     <span className="text-gold font-bold text-sm">3,500 THB</span>
                   </div>
                   <p className="text-stone-500 text-xs italic">{t('ช่วยให้การพักผ่อนและทำสมาธิดียิ่งขึ้น', 'Enhances relaxation and meditation')}</p>
                </div>
                <div className="p-6 rounded-2xl border border-stone-200 bg-white hover:border-gold transition-colors shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] group">
                   <div className="flex justify-between items-start mb-4">
                     <h4 className="text-stone-900 font-serif font-bold group-hover:text-gold transition-colors">{t('รูปปั้นพญานาคหลากสี', 'Colorful Naga Statue')}</h4>
                     <span className="text-gold font-bold text-sm">700 THB</span>
                   </div>
                   <p className="text-stone-500 text-xs italic">{t('งานปั้นมือประณีต สื่อถึงอำนาจและวาสนา', 'Meticulous hand-crafting for power and fortune')}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
