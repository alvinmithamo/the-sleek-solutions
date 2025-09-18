import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Users, Award, TrendingUp, Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const milestones = [
    {
      year: '2021',
      title: 'Foundation',
      description: 'The Sleek Solutions was founded with a vision to revolutionize digital experiences.',
      icon: Lightbulb,
    },
    {
      year: '2022',
      title: 'First Major Clients',
      description: 'Secured partnerships with 15+ startups and small businesses, delivering cutting-edge solutions.',
      icon: Users,
    },
    {
      year: '2023',
      title: 'Technology Excellence',
      description: 'Expanded our tech stack and won "Innovation in Web Development" award.',
      icon: Award,
    },
    {
      year: '2024',
      title: 'Scaling Impact',
      description: 'Reached 50+ successful projects and established our reputation as industry leaders.',
      icon: TrendingUp,
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies to create solutions that are ahead of their time.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Driven',
      description: 'Every project undergoes rigorous testing and optimization to ensure exceptional performance.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'We build lasting partnerships by understanding and exceeding our clients\' expectations.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % milestones.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [milestones.length]);

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-brand-green/10 text-brand-green text-sm font-heading font-semibold px-4 py-2 rounded-full mb-4">
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Crafting the Future of
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Digital Innovation</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-body leading-relaxed">
            We're a forward-thinking tech agency that transforms ideas into powerful, scalable solutions that drive business growth.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Our Story</h3>
            <p className="text-foreground/70 mb-6 font-body leading-relaxed">
              Born from a passion for innovation and a desire to push the boundaries of what's possible in the digital realm, 
              The Sleek Solutions emerged as a beacon of creativity in the tech landscape.
            </p>
            <p className="text-foreground/70 mb-8 font-body leading-relaxed">
              We believe that great design and powerful functionality should work in harmony to create experiences that not only 
              look stunning but also drive real business results. Every project we undertake is a testament to our commitment 
              to excellence and innovation.
            </p>
            <a href="#contact" className="mb-8 inline-block">
            <Button variant="neon" className="group">
             Get in Touch
            </Button>
            </a>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="bg-gradient-primary p-8 rounded-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-4xl font-heading font-bold text-primary-foreground mb-2">30+</div>
                <div className="text-primary-foreground/80 font-body">Successful Projects</div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-card/50 backdrop-blur-sm border border-card-hover rounded-xl p-4 text-center">
                <div className="text-2xl font-heading font-bold text-brand-green mb-1">99%</div>
                <div className="text-sm text-foreground/60 font-body">Client Satisfaction</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-card-hover rounded-xl p-4 text-center">
                <div className="text-2xl font-heading font-bold text-brand-green mb-1">24/7</div>
                <div className="text-sm text-foreground/60 font-body">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-foreground mb-4">{value.title}</h4>
                  <p className="text-foreground/70 font-body leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isActive = activeTimeline === index;
                
                return (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center transition-all duration-500 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    onClick={() => setActiveTimeline(index)}
                  >
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <div className={`bg-card/50 backdrop-blur-sm border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-brand-green/50 ${
                        isActive ? 'border-brand-green shadow-neon scale-105' : 'border-card-hover'
                      }`}>
                        <div className="text-brand-green font-heading font-bold text-lg mb-2">{milestone.year}</div>
                        <h4 className="text-xl font-heading font-semibold text-foreground mb-3">{milestone.title}</h4>
                        <p className="text-foreground/70 font-body">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="relative z-10 my-4 md:my-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-primary border-brand-green shadow-neon' 
                          : 'bg-background-secondary border-card-hover'
                      }`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-primary-foreground' : 'text-foreground/60'}`} />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="w-full md:w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-neon-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default AboutSection;