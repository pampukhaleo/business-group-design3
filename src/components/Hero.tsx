import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="heading-xl text-white mb-6">
          Professionelle Geschäftslösungen
          <span className="block text-accent mt-2">für Ihren Erfolg</span>
        </h1>
        
        <p className="body-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Wir bieten umfassende Dienstleistungen in vier Kernbereichen: 
          Personalvermittlung, Handel, Medizintechnik und Baumaterialien. 
          Ihr Partner für nachhaltiges Wachstum in Deutschland.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground px-8">
            Unsere Services entdecken
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
            Beratungstermin vereinbaren
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;