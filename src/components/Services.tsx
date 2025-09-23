import { Users, Package, Stethoscope, Building } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Kадровое посредничество",
      germanTitle: "Personalvermittlung",
      description: [
        "Поиск и подбор персонала под задачи бизнеса",
        "Опыт работы в разных отраслях", 
        "Надёжные и профессиональные кандидаты"
      ],
      germanDescription: [
        "Suche und Auswahl von Personal für Geschäftsaufgaben",
        "Erfahrung in verschiedenen Branchen",
        "Zuverlässige und professionelle Kandidaten"
      ]
    },
    {
      icon: Package,
      title: "Продукты и хозяйственные товары",
      germanTitle: "Produkte und Haushaltsgeräte", 
      description: [
        "Поставка продуктов питания для организаций и торговли",
        "Хозяйственные принадлежности для дома и бизнеса"
      ],
      germanDescription: [
        "Lieferung von Lebensmitteln für Organisationen und Handel",
        "Haushaltsartikel für Zuhause und Geschäft"
      ]
    },
    {
      icon: Stethoscope,
      title: "Медицинское оборудование",
      germanTitle: "Medizintechnik",
      description: [
        "Современные диагностические системы: МРТ, КТ",
        "Лазерные и терапевтические аппараты",
        "Консультации и сервисное сопровождение"
      ],
      germanDescription: [
        "Moderne Diagnosesysteme: MRT, CT",
        "Laser- und Therapiegeräte",
        "Beratung und Servicebetreuung"
      ]
    },
    {
      icon: Building,
      title: "Строительные материалы",
      germanTitle: "Baumaterialien",
      description: [
        "Натуральный камень и мрамор",
        "Бетон для строительных проектов", 
        "Надёжные поставки и гибкие условия"
      ],
      germanDescription: [
        "Naturstein und Marmor",
        "Beton für Bauprojekte",
        "Zuverlässige Lieferungen und flexible Konditionen"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Wir bieten spezialisierte Lösungen in vier Kernbereichen, 
            die auf die individuellen Bedürfnisse unserer Kunden zugeschnitten sind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-elegant transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-accent-light rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="heading-sm text-foreground mb-4">
                {service.germanTitle}
              </h3>
              
              <ul className="space-y-3">
                {service.germanDescription.map((item, idx) => (
                  <li key={idx} className="body-sm text-muted-foreground flex items-start">
                    <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-border">
                <button className="text-accent hover:text-accent-dark body-sm font-medium transition-colors">
                  Mehr erfahren →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-surface rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="heading-sm text-foreground mb-4">
              Maßgeschneiderte Lösungen
            </h3>
            <p className="body-md text-muted-foreground mb-6">
              Jeder Kunde ist einzigartig. Daher entwickeln wir individuelle Strategien 
              und Lösungsansätze, die perfekt zu Ihren Geschäftszielen passen.
            </p>
            <button className="bg-accent hover:bg-accent-dark text-accent-foreground px-6 py-3 rounded-lg body-md font-medium transition-colors">
              Kostenlose Beratung vereinbaren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;