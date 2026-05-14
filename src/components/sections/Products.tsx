import { motion } from 'motion/react';
import { useLanguage } from '../../LanguageContext';
import { PRODUCTS } from '../../constants';
import { formatCurrency } from '../../lib/utils';

export function Products() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-stone-100/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-stone-200 rounded-md text-gold-dark text-xs font-bold tracking-widest uppercase">
              {t('ตัวอย่างสินค้า', 'SHOWCASE')}
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-950">
              {t('รายการสินค้าตัวอย่าง', 'Product List')}
            </h2>
          </div>
          <p className="text-stone-500 max-w-md text-right font-light italic">
            {t('* ราคาเริ่มต้นตามขนาดและความประณีตของวัสดุ', '* Prices starting based on dimensions and material quality')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-white p-4 rounded-3xl border border-stone-200 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-square relative overflow-hidden rounded-2xl bg-stone-100 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name.en}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-gold text-[8px] px-2 py-0.5 rounded font-bold uppercase tracking-widest">
                    {t('พร้อมส่ง', 'In Stock')}
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-sm font-serif text-stone-900 group-hover:text-gold transition-colors font-bold tracking-tight">
                    {t(product.name.th, product.name.en)}
                  </h3>
                  <div className="w-8 h-px bg-stone-200 mx-auto" />
                  <p className="text-stone-950 font-bold tracking-widest text-base">
                    {formatCurrency(product.price)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[2rem] border border-stone-300 bg-white text-center shadow-inner"
        >
          <p className="text-xl font-serif text-stone-800 italic">
            {t(
              'มีพระพุทธรูปอีกหลากหลายรูปแบบพร้อมจำหน่าย',
              'A wide variety of other Buddha statues are also available.'
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
