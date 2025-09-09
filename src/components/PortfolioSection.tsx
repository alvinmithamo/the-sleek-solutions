import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, Filter, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Website', 'Web App', 'Software', 'Marketing'];

  const projects = [
    {
      id: 1,
      title: 'EcoTech Dashboard',
      category: 'Web App',
      description: 'A comprehensive sustainability tracking platform for enterprise clients.',
      detailedDescription: 'Built a full-stack web application that helps companies track their carbon footprint, manage sustainability goals, and generate compliance reports. Features real-time data visualization, automated reporting, and team collaboration tools.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'AWS'],
      results: ['40% faster reporting', '60% user adoption rate', '25% cost reduction'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'FinanceFlow Website',
      category: 'Website',
      description: 'Modern landing page for a fintech startup with interactive animations.',
      detailedDescription: 'Designed and developed a high-converting landing page that increased conversions by 150%. Features include interactive charts, smooth scroll animations, and integrated payment processing.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Stripe'],
      results: ['150% conversion increase', '3s load time', '95% lighthouse score'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 3,
      title: 'MedConnect System',
      category: 'Software',
      description: 'Healthcare management system connecting patients and doctors.',
      detailedDescription: 'Developed a comprehensive healthcare management system with appointment scheduling, patient records management, telemedicine capabilities, and integrated billing.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Express', 'MongoDB', 'Socket.io', 'Docker'],
      results: ['500+ active users', '99.9% uptime', 'HIPAA compliant'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'TechStart Campaign',
      category: 'Marketing',
      description: 'Digital marketing campaign that generated 300% ROI for a tech startup.',
      detailedDescription: 'Executed a comprehensive digital marketing strategy including SEO, social media marketing, content creation, and paid advertising campaigns across multiple platforms.',
      image: '/api/placeholder/600/400',
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'SEO Tools'],
      results: ['300% ROI', '50K new leads', '80% engagement rate'],
      liveUrl: '#',
      githubUrl: null,
      featured: false,
    },
    {
      id: 5,
      title: 'RetailPro E-commerce',
      category: 'Web App',
      description: 'Full-featured e-commerce platform with inventory management.',
      detailedDescription: 'Built a scalable e-commerce solution with advanced inventory management, order processing, customer analytics, and multi-vendor marketplace capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Redis', 'PostgreSQL', 'Stripe'],
      results: ['$1M+ transactions', '10K+ products', '99.5% uptime'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 6,
      title: 'CreativeStudio Portfolio',
      category: 'Website',
      description: 'Interactive portfolio website for a creative design agency.',
      detailedDescription: 'Designed and developed a visually stunning portfolio website featuring custom animations, case study presentations, and an integrated content management system.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Three.js', 'GSAP', 'Sanity CMS'],
      results: ['200% client inquiries', '4.9/5 user rating', 'Award winning design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background-secondary relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-brand-green/10 text-brand-green text-sm font-heading font-semibold px-4 py-2 rounded-full mb-4">
            Our Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Portfolio of
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Excellence</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-body leading-relaxed">
            Discover our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "neon-glow" : "glass"}
              onClick={() => setActiveFilter(filter)}
              className="transition-all duration-300"
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div 
                  className="group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-card/50 backdrop-blur-sm border border-card-hover rounded-2xl overflow-hidden hover:border-brand-green/50 transition-all duration-300 hover:shadow-card hover:transform hover:scale-105">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-brand-green/20 to-neon-cyan/20 flex items-center justify-center">
                        <Eye className="w-12 h-12 text-brand-green group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      {project.featured && (
                        <Badge className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground">
                          Featured
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/10 transition-colors duration-300"></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-brand-green border-brand-green/30">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-brand-green transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-foreground/70 font-body text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs px-2 py-1 bg-brand-green/10 text-brand-green rounded-md font-body">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-card-hover text-foreground/60 rounded-md font-body">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      <Button variant="minimal" className="group p-0 h-auto">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-card-hover">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-heading font-bold text-foreground flex items-center gap-2">
                    {project.title}
                    <Badge variant="outline" className="text-brand-green border-brand-green/30">
                      {project.category}
                    </Badge>
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="w-full h-64 bg-gradient-to-br from-brand-green/20 to-neon-cyan/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-16 h-16 text-brand-green" />
                  </div>

                  {/* Project Description */}
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">Project Overview</h3>
                    <p className="text-foreground/70 font-body leading-relaxed">{project.detailedDescription}</p>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-brand-green border-brand-green/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Results */}
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">Key Results</h3>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                          <span className="text-foreground/70 font-body">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button variant="neon-glow" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Site
                      </a>
                    </Button>
                    {project.githubUrl && (
                      <Button variant="glass" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-foreground/70 mb-6 font-body">Ready to start your project?</p>
          <Button variant="hero" size="xl" className="group">
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-neon-cyan/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-brand-green/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default PortfolioSection;