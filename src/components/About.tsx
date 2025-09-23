const About = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-foreground mb-8">
            Über unser Unternehmen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="body-lg text-muted-foreground mb-6">
                Wir sind eine etablierte Geschäftsstruktur in Deutschland, die sich auf vier 
                Hauptbereiche spezialisiert hat: Personalvermittlung, Handel mit Produkten 
                und Haushaltsgeräten, Medizintechnik sowie Baumaterialien.
              </p>
              
              <p className="body-lg text-muted-foreground mb-6">
                Unser Ziel ist es, Unternehmen dabei zu unterstützen, ihre Geschäftsziele 
                zu erreichen, indem wir maßgeschneiderte Lösungen und erstklassige 
                Dienstleistungen anbieten.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="heading-md text-accent mb-2">50+</div>
                  <div className="body-sm text-muted-foreground">Erfolgreiche Projekte</div>
                </div>
                <div className="text-center">
                  <div className="heading-md text-accent mb-2">10+</div>
                  <div className="body-sm text-muted-foreground">Jahre Erfahrung</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-8 shadow-card">
              <h3 className="heading-sm text-foreground mb-4">Unsere Vision</h3>
              <p className="body-md text-muted-foreground mb-6">
                Wir streben danach, der führende Partner für Unternehmen zu werden, 
                die nachhaltige und effiziente Geschäftslösungen suchen.
              </p>
              
              <h3 className="heading-sm text-foreground mb-4">Unsere Werte</h3>
              <ul className="space-y-2 body-md text-muted-foreground">
                <li>• Qualität und Zuverlässigkeit</li>
                <li>• Kundenorientierte Lösungen</li>
                <li>• Transparenz und Vertrauen</li>
                <li>• Innovation und Flexibilität</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;