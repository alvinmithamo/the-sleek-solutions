import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  const services = [
    'Website Development',
    'Web App Development', 
    'Software Systems',
    'Digital Marketing',
  ];

  const socialLinks = [
    { icon: Github, href: '#', name: 'Github' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' },
  ];

  return (
    <footer className="bg-background-tertiary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-heading font-bold text-foreground">
                The Sleek Solutions
              </span>
            </div>
            <p className="text-foreground/70 mb-6 font-body leading-relaxed">
              Crafting innovative digital solutions that propel businesses into the future. 
              We turn your ideas into powerful, scalable digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-card/50 hover:bg-brand-green/20 border border-card-hover hover:border-brand-green/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-foreground/60 group-hover:text-brand-green transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-brand-green transition-colors duration-300 font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-foreground/70 font-body">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-brand-green" />
                </div>
                <span className="text-foreground/70 font-body">thesleeksolutionsltd@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-brand-green" />
                </div>
                <span className="text-foreground/70 font-body">+254706824750</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-brand-green" />
                </div>
                <span className="text-foreground/70 font-body">Nairobi, Kenya</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="neon" size="sm" className="w-full">
               Get Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/50 font-body text-sm mb-4 md:mb-0">
              © {currentYear} The Sleek Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/50 hover:text-brand-green transition-colors duration-300 font-body text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/50 hover:text-brand-green transition-colors duration-300 font-body text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;