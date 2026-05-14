import { motion } from 'motion/react';
import { useLanguage } from '../../LanguageContext';
import { MATERIALS } from '../../constants';

export function Materials() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-3 py-1 bg-stone-200 rounded-md text-gold-dark text-xs font-bold tracking-widest uppercase">
            {t('วัสดุอันเป็นมงคล', 'SACRED MATERIALS')}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-950">
            {t('หมวดหมู่สินค้าตามประเภทวัสดุ', 'Material Categories')}
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {MATERIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-stone-200 bg-white group-hover:border-gold transition-colors duration-500 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.name.en}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-sm md:text-base font-serif text-white mb-1 group-hover:text-gold transition-colors font-bold uppercase tracking-wide">
                    {t(item.name.th, item.name.en)}
                  </h3>
                  <p className="text-[10px] text-white/70 font-light leading-tight h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    {t(item.meaning.th, item.meaning.en)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
