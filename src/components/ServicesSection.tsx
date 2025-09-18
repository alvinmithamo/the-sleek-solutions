import { Button } from '@/components/ui/button';
import { Code, Smartphone, Cog, Megaphone, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom, responsive websites built with cutting-edge technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern Frameworks'],
      color: 'from-brand-green to-brand-green-deep',
    },
    {
      icon: Smartphone,
      title: 'Web App Development',
      description: 'Interactive web applications that deliver native-like experiences across all devices and platforms.',
      features: ['Progressive Web Apps', 'Real-time Features', 'Cross-platform', 'Scalable Architecture'],
      color: 'from-neon-cyan to-neon-blue',
    },
    {
      icon: Cog,
      title: 'Software Systems',
      description: 'Enterprise-grade software solutions and system integrations tailored to your business needs.',
      features: ['Custom Solutions', 'API Integration', 'Database Design', 'Cloud Deployment'],
      color: 'from-neon-purple to-neon-blue',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing and social media management to amplify your online presence.',
      features: ['Social Media Strategy', 'Content Creation', 'SEO & SEM', 'Analytics & Reporting'],
      color: 'from-brand-green-light to-brand-green',
    },
  ];

  return (
    <section id="services" className="py-20 bg-background-secondary relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-brand-green/10 text-brand-green text-sm font-heading font-semibold px-4 py-2 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Innovative Solutions for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Every Need</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-body">
            From concept to deployment, we provide comprehensive digital solutions that drive growth and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  hoveredService === index ? 'transform scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="bg-card/50 backdrop-blur-sm border border-card-hover rounded-2xl p-8 h-full hover:border-brand-green/50 transition-all duration-300 hover:shadow-card">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 font-body leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                        <span className="text-sm text-foreground/60 font-body">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="minimal" 
                    className="group p-0 h-auto"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <a href="#contact" className="mb-8 inline-block">
          <Button variant="neon-glow" size="xl" className="group">
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          </a>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-neon-cyan/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default ServicesSection;