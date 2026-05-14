/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './LanguageContext';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Materials } from './components/sections/Materials';
import { Products } from './components/sections/Products';
import { NewProducts } from './components/sections/NewProducts';
import { Contact } from './components/sections/Contact';

function MainLayout() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Materials />
      <Products />
      <NewProducts />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}

