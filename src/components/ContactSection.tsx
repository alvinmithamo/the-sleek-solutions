import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Calendar,
  Globe,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@sleeksolutions.com',
      href: 'mailto:hello@sleeksolutions.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San+Francisco,+CA',
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'www.sleeksolutions.com',
      href: 'https://www.sleeksolutions.com',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/sleeksolutions', name: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/sleeksolutions', name: 'Twitter' },
    { icon: Github, href: 'https://github.com/sleeksolutions', name: 'GitHub' },
  ];

  const services = [
    'Website Development',
    'Web App Development',
    'Software Systems',
    'Digital Marketing',
    'UI/UX Design',
    'Consulting',
  ];

  const budgetRanges = [
    '$5K - $10K',
    '$10K - $25K',
    '$25K - $50K',
    '$50K+',
    'Let\'s Discuss',
  ];

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-brand-green/10 text-brand-green text-sm font-heading font-semibold px-4 py-2 rounded-full mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Let's Build Something
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Amazing Together</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-body leading-relaxed">
            Ready to transform your digital presence? Get in touch with us to discuss your project and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="bg-card/50 backdrop-blur-sm border-card-hover p-8 hover:border-brand-green/30 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-6">
                <MessageSquare className="w-6 h-6 text-brand-green" />
                <h3 className="text-2xl font-heading font-bold text-foreground">Send us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-body">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-input border-card-hover focus:border-brand-green transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-body">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-input border-card-hover focus:border-brand-green transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2 font-body">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-input border-card-hover focus:border-brand-green transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2 font-body">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-input border border-card-hover rounded-md text-foreground focus:border-brand-green focus:outline-none transition-colors duration-300 font-body"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2 font-body">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-input border border-card-hover rounded-md text-foreground focus:border-brand-green focus:outline-none transition-colors duration-300 font-body"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-body">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-input border-card-hover focus:border-brand-green transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Information */}
            <Card className="bg-card/50 backdrop-blur-sm border-card-hover p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-card-hover transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center group-hover:bg-brand-green/30 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-brand-green" />
                      </div>
                      <div>
                        <div className="text-sm text-foreground/60 font-body">{info.label}</div>
                        <div className="text-foreground font-body font-medium group-hover:text-brand-green transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-card/50 backdrop-blur-sm border-card-hover p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Our Location</h3>
              <div className="w-full h-48 bg-gradient-to-br from-brand-green/20 to-neon-cyan/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-brand-green mx-auto mb-2" />
                  <p className="text-foreground/70 font-body">Interactive Map</p>
                  <p className="text-sm text-foreground/50 font-body">San Francisco, CA</p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-sm border-card-hover p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-card-hover hover:bg-brand-green/20 border border-card-hover hover:border-brand-green/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6 text-foreground/60 group-hover:text-brand-green transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="neon" className="group h-16 flex-col">
                <Calendar className="w-6 h-6 mb-1" />
                <span className="text-sm">Schedule Call</span>
              </Button>
              <Button variant="glass" className="group h-16 flex-col">
                <MessageSquare className="w-6 h-6 mb-1" />
                <span className="text-sm">Live Chat</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Response Time Badge */}
        <div className="text-center mt-12 animate-fade-in">
          <Badge variant="outline" className="text-brand-green border-brand-green/30 px-4 py-2">
            ⚡ We typically respond within 24 hours
          </Badge>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-brand-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-neon-purple/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default ContactSection;