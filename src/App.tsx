/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Menu, 
  X, 
  Download, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  MapPin, 
  Phone, 
  Mail,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

// Types
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface Catalog {
  id: string;
  name: string;
  description: string;
  pdfUrl: string;
  imageUrl: string;
}

const WHATSAPP_NUMBER = "5492901643266";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const getWhatsAppLink = (message: string) => {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Telas", href: "#telas" },
    { name: "Mercerías", href: "#merceria" },
    { name: "Patrones", href: "#recursos" },
    { name: "Talleres", href: "#talleres" },
    { name: "Contacto", href: "#contacto" },
  ];

  const catalogs: Catalog[] = [
    { id: "1", name: "Accesorios", description: "Cierres, hebillas y más.", pdfUrl: "pdfs/ACCESORIOS_catalogo.pdf", imageUrl: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?auto=format&fit=crop&q=80&w=400" },
    { id: "2", name: "Elastizado", description: "Telas con movimiento.", pdfUrl: "pdfs/Catalogo_Elastizado.pdf", imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400" },
    { id: "3", name: "Planas", description: "Linos y algodones.", pdfUrl: "pdfs/Catalogo_Planas.pdf", imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=400" },
    { id: "4", name: "Liso Elastizado", description: "Básicos de calidad.", pdfUrl: "pdfs/Liso_Elastizado_CATALOGO.pdf", imageUrl: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=400" },
    { id: "5", name: "Liso Planas", description: "Minimalismo textil.", pdfUrl: "pdfs/Liso_Planas_CATALOGO.pdf", imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=400" },
    { id: "6", name: "Manualidades", description: "Inspiración para crear.", pdfUrl: "pdfs/MANUALIDADES_catalogo.pdf", imageUrl: "https://images.unsplash.com/photo-1506806732259-39c2d4ad6881?auto=format&fit=crop&q=80&w=400" },
  ];

  const offers: Product[] = [
    { id: "o1", name: "Navidad Ecocuero", price: "$5.000", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400" },
    { id: "o2", name: "Aguayo Poliéster", price: "$7.000", image: "https://images.unsplash.com/photo-1528461426466-9818816f1eb3?auto=format&fit=crop&q=80&w=400" },
    { id: "o3", name: "Algodón Tapicería", price: "$7.000", image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=400" },
    { id: "o4", name: "Seda Lavada", price: "$3.500", image: "https://images.unsplash.com/photo-1520004434532-668416a08753?auto=format&fit=crop&q=80&w=400" },
    { id: "o5", name: "Gasa Estampada", price: "$3.000", image: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&q=80&w=400" },
    { id: "o6", name: "Chenille Marrón", price: "$7.000", image: "https://images.unsplash.com/photo-1560064060-8aafaec634da?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-green-dark/95 backdrop-blur-md shadow-lg py-2" : "bg-green-dark py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="font-brand text-3xl md:text-4xl text-gold">Lis Sedería</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-cream/80 hover:text-gold transition-colors font-medium tracking-wide text-sm uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-green-dark border-t border-gold/20 flex flex-col p-6 gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-cream text-lg font-serif tracking-widest text-center py-2 border-b border-gold/10"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="relative min-h-[90vh] bg-green-dark flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="lis_sederia_hero_textiles.png" 
              alt="Lis Sedería Hero" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=2000';
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-green-dark/60 via-green-dark/40 to-green-dark/60"></div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gold font-brand text-6xl md:text-8xl lg:text-9xl mb-4 normal-case leading-none">
  Lis Sedería
</h2>
              <h3 className="text-cream font-serif text-3xl md:text-5xl lg:text-6xl mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
                TU HOGAR ARTESANAL<br />EN USHUAIA
              </h3>
              <p className="text-cream/80 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-light">
                Descubre la elegancia en cada puntada.<br />
                Telas exclusivas y mercería fina.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#telas" 
                  className="bg-cream text-text-dark font-sans px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-all shadow-md"
                >
                  Explorar Colección
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TELAS FINAS SECTION */}
        <section id="telas" className="py-24 bg-cream overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
              <div className="w-full md:w-1/2 relative rose-shadow">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <img 
                    src="lis_sederia_fabrics_stack.png" 
                    alt="Telas Finas" 
                    className="w-full aspect-[4/3] object-cover shadow-xl border border-gold/10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight text-text-dark">TELAS FINAS</h2>
                  <p className="text-lg text-text-dark/80 mb-8 leading-relaxed max-w-md">
                    Una selección curada de linos, algodones, sedas y lanas de alta calidad. 
                    Perfectas para tus proyectos de costura y decoración.
                  </p>
                  <a 
                    href={getWhatsAppLink("Hola, quiero consultar por telas de Lis Sedería.")}
                    className="inline-block bg-rose text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-gold transition-all shadow-sm"
                  >
                    Ver Telas
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* MERCERÍA DE LUJO SECTION */}
        <section id="merceria" className="py-24 bg-cream overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
              <div className="w-full md:w-1/2 relative rose-shadow rose-shadow-right">
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <img 
                    src="lis_sederia_merceria_notions.png" 
                    alt="Mercería de Lujo" 
                    className="w-full aspect-[4/3] object-cover shadow-xl border border-gold/10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 md:text-right">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight text-text-dark">MERCERÍA DE LUJO</h2>
                  <div className="flex md:justify-end">
                    <p className="text-lg text-text-dark/80 mb-8 leading-relaxed max-w-md">
                      Detalles que marcan la diferencia. Cintas, botones, hilos y accesorios 
                      premium para tus creaciones más especiales.
                    </p>
                  </div>
                  <a 
                    href={getWhatsAppLink("Hola, quiero consultar por productos de mercería de Lis Sedería.")}
                    className="inline-block bg-rose text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-gold transition-all shadow-sm"
                  >
                    Ver Mercerías
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* BANNER TEMPORADA */}
        <section id="talleres" className="py-20 bg-rose relative overflow-hidden">
          <div className="absolute inset-0 gold-glitter opacity-30"></div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gold-light/10 blur-3xl -rotate-12 transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-full bg-gold-light/10 blur-3xl rotate-12 transform translate-x-1/2"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white font-serif text-4xl md:text-5xl mb-6 tracking-tight">TEMPORADA DE CREACIÓN</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                Inspirate con nuestras nuevas colecciones y talleres.<br />
                El momento de crear es ahora. Participa de nuestra comunidad artesanal.
              </p>
              <a 
                href={getWhatsAppLink("Hola, quiero consultar por los talleres de Lis Sedería.")}
                className="inline-block bg-cream text-text-dark px-8 py-2.5 rounded-full font-bold uppercase tracking-widest text-xs hover:translate-y-[-2px] transition-all shadow-md"
              >
                Unirse al Taller
              </a>
            </motion.div>
          </div>
        </section>

        {/* REGALOS PERSONALIZADOS */}
        <section className="py-24 bg-cream overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
              <div className="w-full md:w-1/2 relative rose-shadow">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <img 
                    src="lis_sederia_custom_gifts.png" 
                    alt="Regalos Personalizados" 
                    className="w-full aspect-[4/3] object-cover shadow-xl border border-gold/10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight text-text-dark text-balance">REGALOS PERSONALIZADOS</h2>
                  <p className="text-lg text-text-dark/80 mb-8 leading-relaxed max-w-md text-pretty">
                    Haz que tus regalos sean únicos y memorables. 
                    Creamos piezas textiles a medida para esas ocasiones especiales. 
                    Consultanos por tus ideas.
                  </p>
                  <a 
                    href={getWhatsAppLink("Hola, quiero consultar por regalos personalizados de Lis Sedería.")}
                    className="inline-block bg-rose text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-gold transition-all shadow-sm"
                  >
                    Contactar para Regalos
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CATALOGOS Y RECURSOS */}
        <section id="recursos" className="py-24 bg-beige/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-text-dark">CATÁLOGOS Y RECURSOS</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-lg text-text-dark/70 max-w-2xl mx-auto">
                Descargá nuestros catálogos por categoría o consultanos por WhatsApp para obtener asesoramiento directo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {catalogs.map((catalog) => (
                <motion.div 
                  key={catalog.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col border border-gold/10"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={catalog.imageUrl} 
                      alt={catalog.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-green-dark/20 group-hover:bg-green-dark/40 transition-all"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-gold text-white p-2 rounded-full shadow-lg">
                        <Download size={18} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-serif mb-2 text-text-dark">{catalog.name}</h3>
                    <p className="text-text-dark/60 mb-6 flex-grow text-sm">{catalog.description}</p>
                    <div className="flex gap-2">
                       <a 
                        href={catalog.pdfUrl}
                        download
                        className="flex-1 text-center bg-green-bottle text-white py-2 rounded font-bold text-xs uppercase tracking-widest hover:bg-green-dark transition-colors"
                      >
                        PDF
                      </a>
                      <a 
                        href={getWhatsAppLink(`Hola, quiero consultar por el catálogo de ${catalog.name} de Lis Sedería.`)}
                        className="flex-1 text-center border border-green-bottle text-green-bottle py-2 rounded font-bold text-xs uppercase tracking-widest hover:bg-green-bottle hover:text-white transition-all"
                      >
                        Consultar
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OFERTAS Y NOVEDADES */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-text-dark uppercase tracking-tight">OFERTAS Y NOVEDADES</h2>
              <p className="text-lg text-text-dark/60">Productos seleccionados de temporada</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {offers.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 rounded-sm shadow-lg">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 ring-1 ring-gold/20 ring-inset"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm">
                      <a 
                        href={getWhatsAppLink(`Hola, quiero consultar por la oferta de ${product.name} de ${product.price}.`)}
                        className="w-full flex items-center justify-center gap-2 bg-green-dark text-gold py-3 rounded-full font-bold uppercase tracking-widest text-xs"
                      >
                        <MessageCircle size={16} />
                        Consultar
                      </a>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-serif mb-1 group-hover:text-gold transition-colors">{product.name}</h3>
                    <p className="text-gold font-bold tracking-widest">{product.price} <span className="text-text-dark/40 text-xs font-normal font-sans">el metro</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO & MAPA */}
        <section id="contacto" className="py-24 bg-green-deep text-cream">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gold uppercase underline decoration-gold/30 underline-offset-[12px]">VISITÁ NUESTRO LOCAL</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-gold/20 p-2 rounded-lg text-gold">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Ubicación</h4>
                      <p className="text-cream/70 leading-relaxed max-w-xs">
                        Facundo Quiroga 1329,<br />
                        Ushuaia, Tierra del Fuego
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-gold/20 p-2 rounded-lg text-gold">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">WhatsApp</h4>
                      <p className="text-cream/70 leading-relaxed font-sans">
                        +54 9 2901 643266
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-gold/20 p-2 rounded-lg text-gold">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Instagram</h4>
                      <p className="text-cream/70">
                        @sederia.lis
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-8 text-center sm:text-left">
                    <a 
                      href={getWhatsAppLink("Hola, vi la página de Lis Sedería y quería hacer una consulta.")}
                      className="inline-flex items-center gap-3 bg-gold text-green-dark px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-all shadow-xl"
                    >
                      Escribir por WhatsApp
                      <ChevronRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 h-[450px] relative rounded-2xl overflow-hidden shadow-2xl border border-gold/20">
                <div className="absolute inset-0 bg-green-dark/40 z-10 pointer-events-none"></div>
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Ushuaia Map Location" 
                  className="w-full h-full object-cover grayscale opacity-50 contrast-125"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-green-dark/90 backdrop-blur-md p-8 rounded-xl border border-gold/30 text-center max-w-sm mx-4">
                    <MapPin className="mx-auto text-gold mb-4" size={48} />
                    <h3 className="text-xl font-serif mb-4">Estamos en el corazón de Ushuaia</h3>
                    <p className="text-cream/60 text-sm mb-6">Encontrá las mejores telas y asesoramiento experto en Tierra del Fuego.</p>
                    <a 
                      href="https://maps.google.com/?q=Facundo+Quiroga+1329,+Ushuaia,+Tierra+del+Fuego" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block text-gold font-bold underline transition-colors"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-green-dark py-20 border-t border-gold/10 text-cream/70">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div>
              <h1 className="font-brand text-4xl text-gold mb-6">Lis Sedería</h1>
              <p className="text-sm leading-relaxed mb-6 font-sans">
                Una selección curada de telas, mercería y artículos creativos para acompañar proyectos de costura, decoración y manualidades. Calidad premium desde 1994.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/sederia.lis" className="text-gold hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                <a href="#" className="text-gold hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href={WHATSAPP_BASE_URL} className="text-gold hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-serif text-xl mb-6 tracking-wide underline underline-offset-8 decoration-gold">ENLACES</h4>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="hover:text-gold transition-colors text-sm font-medium font-sans uppercase tracking-widest">{link.name}</a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-white font-serif text-xl mb-6 tracking-wide underline underline-offset-8 decoration-gold">CONTACTO</h4>
              <ul className="space-y-4 text-sm leading-relaxed font-sans">
                <li className="flex gap-3">
                  <MapPin size={16} className="text-gold flex-shrink-0" />
                  <span>Facundo Quiroga 1329,<br />Ushuaia, Tierra del Fuego</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  <span>+54 9 2901 643266</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={16} className="text-gold flex-shrink-0" />
                  <span>lis_sederia@ushuaia.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-xl mb-6 tracking-wide underline underline-offset-8 decoration-gold">SUSCRÍBITE</h4>
              <p className="text-xs mb-6 text-cream/50 font-sans">Formá parte de nuestra comunidad creativa y recibí novedades.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-green-deep border border-gold/20 rounded-full py-3 px-6 text-sm text-cream focus:outline-none focus:border-gold transition-colors font-sans"
                />
                <button className="absolute right-2 top-1.5 bg-gold text-green-dark p-2 rounded-full hover:bg-gold-light transition-colors">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-medium opacity-50 font-sans">
            <p>© 2026 LIS SEDERÍA · URTEAR HOME</p>
            <div className="flex gap-8">
              <a href="#">Términos</a>
              <a href="#">Privacidad</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_BASE_URL}
        className="fixed bottom-8 right-8 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center border-2 border-white/20"
        aria-label="Contact on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
