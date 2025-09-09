import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'The Sleek Solutions transformed our digital presence completely. Their innovative approach and attention to detail resulted in a 300% increase in our conversion rates. Absolutely exceptional work!',
      project: 'E-commerce Platform Development',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      position: 'Founder, GreenTech Solutions',
      company: 'GreenTech Solutions',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Working with The Sleek Solutions was a game-changer for our sustainability platform. They delivered beyond our expectations and helped us secure $2M in funding with their amazing dashboard design.',
      project: 'Sustainability Dashboard',
    },
    {
      id: 3,
      name: 'Emily Watson',
      position: 'Marketing Director, HealthFlow',
      company: 'HealthFlow',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Their digital marketing expertise is unmatched. The campaign they created generated over 50,000 qualified leads and increased our brand awareness by 400%. Highly recommend!',
      project: 'Digital Marketing Campaign',
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'CTO, FinanceFlow',
      company: 'FinanceFlow',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'The web application they built for us handles millions of transactions flawlessly. Their technical expertise and project management skills are truly world-class.',
      project: 'Financial Management System',
    },
  ];

  const clientLogos = [
    { name: 'TechStart', logo: 'TS' },
    { name: 'GreenTech', logo: 'GT' },
    { name: 'HealthFlow', logo: 'HF' },
    { name: 'FinanceFlow', logo: 'FF' },
    { name: 'EcoSmart', logo: 'ES' },
    { name: 'DataViz', logo: 'DV' },
    { name: 'CloudMax', logo: 'CM' },
    { name: 'RetailPro', logo: 'RP' },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-brand-green/10 text-brand-green text-sm font-heading font-semibold px-4 py-2 rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            What Our Clients
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Say</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-body leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card/50 backdrop-blur-sm border-card-hover p-8 text-center relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6">
                      <Quote className="w-8 h-8 text-brand-green/30" />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg text-foreground/80 font-body leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-heading font-bold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="font-heading font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-foreground/60 font-body">{testimonial.position}</div>
                        <div className="text-sm text-brand-green font-body">{testimonial.company}</div>
                      </div>
                    </div>

                    {/* Project Tag */}
                    <div className="mt-4">
                      <span className="inline-block bg-brand-green/10 text-brand-green text-xs px-3 py-1 rounded-full font-body">
                        Project: {testimonial.project}
                      </span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-card/80 backdrop-blur-sm border border-card-hover rounded-full flex items-center justify-center hover:border-brand-green/50 hover:bg-brand-green/10 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-foreground hover:text-brand-green" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-card/80 backdrop-blur-sm border border-card-hover rounded-full flex items-center justify-center hover:border-brand-green/50 hover:bg-brand-green/10 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-foreground hover:text-brand-green" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'bg-brand-green shadow-neon' 
                    : 'bg-card-hover hover:bg-brand-green/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos Marquee */}
        <div className="mb-16">
          <h3 className="text-xl font-heading font-semibold text-foreground text-center mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_20s_linear_infinite] space-x-8">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-20 h-20 bg-card/30 backdrop-blur-sm border border-card-hover rounded-lg flex items-center justify-center hover:border-brand-green/30 transition-all duration-300"
                >
                  <span className="text-foreground/60 font-heading font-bold text-sm">
                    {client.logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-foreground/70 mb-8 font-body">
            Let's discuss how we can help transform your business with innovative digital solutions.
          </p>
          <Button variant="hero" size="xl" className="group">
            Start Your Success Story
          </Button>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-brand-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-neon-purple/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default TestimonialsSection;