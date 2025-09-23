import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { label: "Start", href: "#start" },
    { label: "Über uns", href: "#about" },
    { label: "Dienstleistungen", href: "#services" },
    { label: "Kontakt", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header-bg text-header-foreground border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-heading text-xl">B</span>
            </div>
            <span className="heading-sm text-header-foreground">Business Solutions</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="body-md text-header-foreground/80 hover:text-header-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button variant="default" size="sm" className="bg-accent hover:bg-accent-dark text-accent-foreground">
            Beratung anfragen
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;