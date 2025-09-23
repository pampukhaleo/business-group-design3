const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-heading text-xl">B</span>
              </div>
              <span className="heading-sm">Business Solutions</span>
            </div>
            <p className="body-md text-primary-foreground/80 mb-4 max-w-md">
              Ihr zuverlässiger Partner für professionelle Geschäftslösungen 
              in Deutschland. Qualität, Vertrauen und Erfolg sind unsere Grundpfeiler.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                XING
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Email
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="heading-sm mb-4">Dienstleistungen</h3>
            <ul className="space-y-2">
              <li><a href="#" className="body-sm text-primary-foreground/80 hover:text-accent transition-colors">Personalvermittlung</a></li>
              <li><a href="#" className="body-sm text-primary-foreground/80 hover:text-accent transition-colors">Produkte & Geräte</a></li>
              <li><a href="#" className="body-sm text-primary-foreground/80 hover:text-accent transition-colors">Medizintechnik</a></li>
              <li><a href="#" className="body-sm text-primary-foreground/80 hover:text-accent transition-colors">Baumaterialien</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="heading-sm mb-4">Kontakt</h3>
            <div className="space-y-2 body-sm text-primary-foreground/80">
              <p>Deutschland</p>
              <p>Telefon: +49 (0) XXX XXX XXX</p>
              <p>E-Mail: info@business-solutions.de</p>
              <p>Mo-Fr: 9:00-18:00 Uhr</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="body-sm text-primary-foreground/60">
            © 2024 Business Solutions. Alle Rechte vorbehalten.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="body-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Datenschutz
            </a>
            <a href="#" className="body-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Impressum
            </a>
            <a href="#" className="body-sm text-primary-foreground/60 hover:text-accent transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;