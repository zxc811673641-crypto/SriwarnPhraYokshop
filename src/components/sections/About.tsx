import { motion } from 'motion/react';
import { useLanguage } from '../../LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-stone-200">
               <img 
                src="/src/assets/images/regenerated_image_1778752360507.jpg" 
                alt="About us"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-72 aspect-square bg-white p-4 rounded-[2.5rem] border border-stone-200 shadow-2xl hidden lg:block">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                <img 
                  src="/src/assets/images/regenerated_image_1778751404584.jpg" 
                  alt="Detail"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-stone-100 rounded-full text-stone-500 text-[10px] font-bold tracking-[0.2em] uppercase border border-stone-200">
                {t('ตำนานแห่งศรัทธา', 'THE LEGACY')}
              </div>
              <h2 className="text-5xl lg:text-6xl font-serif text-stone-950 leading-[1.1] tracking-tight">
                {t('มรดกแห่งศิลปะการแกะสลักหิน', 'Timeless Artistry in Stone')}
              </h2>
            </div>

            <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
              <p>
                {t(
                  'ร้านศรีวรรณตั้งอยู่ ณ หนองคาย เราคือผู้สืบทอดศิลปะการแกะสลักหินที่มีความประณีตสูง ผลงานทุกชิ้นเริ่มต้นจากการคัดเลือกหินธรรมชาติที่มีคุณภาพและมีความหมายเป็นมงคล',
                  'In the heart of Nong Khai, Sriwarn stands as a beacon of meticulous stone craftsmanship. Our journey begins with the selection of the finest natural stones, each carrying auspicious weight and spiritual resonance.'
                )}
              </p>
              <p className="text-stone-800">
                {t(
                  'ผ่านกระบวนการทำมือโดยช่างผู้ชำนาญการที่ใส่ใจในทุกรายละเอียด ตั้งแต่การขึ้นรูปจนถึงการเก็บงานขั้นสุดท้าย เพื่อมอบพุทธศิลป์ที่งดงาม ทรงคุณค่า และเสริมสิริมงคลให้แก่ผู้บูชา',
                  'Hand-carved by master artisans, every detail reflects a devotion to perfection—from the first strike of the chisel to the final mirror-like polish.'
                )}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-3xl font-serif text-stone-950 mb-1">100%</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Handcrafted Art</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-stone-950 mb-1">Premium</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Natural Stone</p>
              </div>
            </div>

            <div className="pt-10 border-t border-stone-200 flex items-center gap-6">
              <div className="text-stone-950 font-serif text-lg">
                <span className="block italic">{t('นายพีรพัฒน์ ศรีวงศ์', 'Peerapat Sriwong')}</span>
                <span className="text-[10px] text-stone-400 not-italic uppercase tracking-[0.2em] font-sans font-bold">
                  {t('ผู้ดูแลและศิลปินหัตถศิลป์', 'Curator & Artisan')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
