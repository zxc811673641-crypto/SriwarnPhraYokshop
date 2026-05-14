import { motion } from 'motion/react';
import { useLanguage } from '../../LanguageContext';
import { CONTACTS } from '../../constants';
import { Phone, Facebook, MapPin, Truck } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-3 py-1 bg-stone-200 rounded-md text-gold-dark text-xs font-bold tracking-widest uppercase">
            {t('ติดต่อเรา', 'CONTACT INFORMATION')}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-950">
            {t('ข้อมูลการติดต่อ', 'Connect with Us')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {CONTACTS.map((branch) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-12 rounded-[3rem] border border-stone-300 bg-stone-50 hover:border-gold transition-colors duration-500 shadow-sm"
            >
              <h3 className="text-3xl font-serif text-stone-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                {t(branch.name.th, branch.name.en)}
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div>
                    <p className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">{t('ที่อยู่', 'Address')}</p>
                    <p className="text-stone-800 leading-relaxed font-medium">
                      {t(branch.address.th, branch.address.en)} {branch.postalCode}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <p className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">{t('เบอร์โทรศัพท์', 'Phone')}</p>
                    <div className="space-y-1">
                      {branch.phone.map((num) => (
                        <p key={num} className="text-stone-800 font-medium">{num}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">{t('เฟซบุ๊ก', 'Facebook')}</p>
                    <p className="text-stone-800 font-medium break-all">{branch.facebook}</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-stone-200 flex items-center gap-4 text-gold-dark">
                  <Truck className="w-6 h-6" />
                  <span className="font-serif italic text-lg">
                    {t(branch.service.th, branch.service.en)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <footer className="mt-24 px-12 py-8 bg-stone-900 text-stone-200 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-6 uppercase tracking-[0.2em] text-[10px] font-bold text-stone-400">
            <span>Authenticity Guaranteed • รับประกันพระแท้</span>
            <span className="hidden md:inline">|</span>
            <span>Master Artisans • งานแกะสลักพุทธศิลป์ผู้เชี่ยวชาญ</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">
            Sriwarn Phra Yok &copy; 2024. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </div>
    </section>
  );
}
