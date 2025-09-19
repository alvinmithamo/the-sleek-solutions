import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-green/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-neon-cyan/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-neon-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,190,83,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(138,190,83,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-24">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/20 backdrop-blur-sm border border-brand-green/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-brand-green" />
            <span className="text-sm font-body text-foreground">
              Innovative Tech Solutions
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight animate-slide-up">
            The Future of
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Digital </span>
            Innovation
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto font-body leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We craft cutting-edge websites, web applications, and digital experiences that propel your business into the future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="mb-8 inline-block">
            <Button variant="hero" size="xl" className="group">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            </a>
            <a href="#portfolio" className="mb-8 inline-block">
            <Button variant="glass" size="xl" className="group">
              <Zap className="w-5 h-5 text-brand-green" />
              View Our Work
            </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-brand-green mb-2">20+</div>
              <div className="text-sm font-body text-foreground/60">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-brand-green mb-2">99%</div>
              <div className="text-sm font-body text-foreground/60">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-brand-green mb-2">3+</div>
              <div className="text-sm font-body text-foreground/60">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-brand-green mb-2">24/7</div>
              <div className="text-sm font-body text-foreground/60">Support</div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
      

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-green/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;