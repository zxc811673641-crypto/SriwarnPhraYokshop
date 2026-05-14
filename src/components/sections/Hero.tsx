import { motion } from 'motion/react';
import { useLanguage } from '../../LanguageContext';
import { LanguageToggle } from '../LanguageToggle';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-stone-50 border-b border-stone-300">
      <nav className="relative w-full px-12 py-6 flex justify-between items-center z-50 bg-white border-b border-stone-300">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white font-serif text-2xl">☸</div>
          <span className="font-serif text-xl font-bold tracking-tight text-stone-800 uppercase">SRIWARN</span>
        </div>
        <LanguageToggle />
      </nav>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-white border-r border-stone-300">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-3 py-1 bg-stone-200 rounded-md text-gold-dark text-xs font-bold tracking-widest uppercase mb-2">
              {t('ศิลปะแห่งพุทธคุณ • EXQUISITE BUDDHIST ART', 'Exquisite Buddhist Art • Legacy of Faith')}
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-serif text-stone-950 leading-[0.9]">
              {t('ร้านศรีวรรณ', 'Sriwarn')} <br/>
              <span className="text-gold italic font-light">{t('พระหยก', 'Artistry')}</span>
            </h1>
            
            <div className="space-y-6 max-w-lg">
              <p className="text-xl leading-relaxed text-stone-700 font-light">
                {t('สัมผัสพุทธศิลป์และหินมงคลอันล้ำค่าที่สืบทอดความประณีต ผ่านการแกะสลักหินธรรมชาติด้วยช่างศิลป์ผู้ชำนาญ', 
                  'Discover timeless spiritual heritage through hand-carved natural stone statues, crafted by master artisans with decades of experience.')}
              </p>
              <div className="flex items-center gap-4 text-stone-500 text-sm tracking-widest uppercase font-bold">
                <span className="w-8 h-px bg-stone-300" />
                {t('หนองคาย • แม่สาย', 'Nong Khai • Mae Sai')}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-10 py-5 bg-stone-900 text-stone-50 rounded-full font-bold uppercase tracking-widest hover:bg-gold transition-all duration-500 shadow-2xl shadow-stone-200">
                {t('สำรวจคอลเลกชัน', 'The Collection')}
              </button>
              <button className="px-10 py-5 bg-white text-stone-900 border border-stone-200 rounded-full font-bold uppercase tracking-widest hover:border-gold transition-all duration-500">
                {t('ติดต่อเรา', 'Contact us')}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Visual */}
        <div className="w-full md:w-1/2 bg-stone-50 flex items-center justify-center relative p-8 lg:p-16">
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full max-w-lg aspect-[4/5] relative"
           >
              <div className="absolute inset-4 border border-stone-200 rounded-[3rem] -z-10" />
              <div className="w-full h-full bg-white p-6 rounded-[2.5rem] border border-stone-300 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative group overflow-hidden">
                <div className="absolute top-10 left-10 bg-stone-900 text-white text-[10px] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest z-10 shadow-xl">
                  {t('ชิ้นงานเอกลักษณ์', 'Signature Piece')}
                </div>
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                  <img 
                    src="/src/assets/images/regenerated_image_1778751432679.jpg"
                    alt="Sriwarn Shop"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl border border-stone-200 shadow-xl max-w-[200px]">
                <p className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-2">{t('วัสดุ', 'Material')}</p>
                <p className="text-sm font-serif font-bold text-stone-900 leading-tight">Authentic Natural Jade & Gemstones</p>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
