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
      title: 'Dr. Dorcus Muchiri',
      category: 'Web App',
      description: 'A portfolio website for a gynaecologist with appointment booking feature for her patients.',
      detailedDescription: 'Built a full-stack website that showcases Dr. Dorcus Muchiri\'s expertise and services. Features include an appointment booking system, patient testimonials, and a blog section for health tips.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'GHL Integration', 'Tailwind CSS'],
      results: ['50+ appointments booked', '30% increase in patient inquiries', 'Responsive design'],
      liveUrl: 'https://dorcus-muchiri.vercel.app/',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Kibwezi Honey Marketing Society',
      category: 'Website',
      description: ' A website for a women-led co-operative society which is committed to empowering bee-keeping farming in Makueni.',
      detailedDescription: 'Developed a visually appealing and user-friendly website for Kibwezi Honey Marketing Society. The site includes sections for their products, mission, and contact information, along with integrated social media links.',
      image: '/api/placeholder/600/400',
      technologies: ['WordPress', 'Elementor', 'SEO Optimization'],
      results: ['40% increase in online visibility', 'Enhanced community engagement', 'Mobile-friendly design'],
      liveUrl: 'https://kibwezihoneymarketing.com/',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 3,
      title: 'Voi Adventures',
      category: 'Website',
      description: 'A travel and adventure company website with booking and tour management features.',
      detailedDescription: 'Created a dynamic website for Voi Adventures that allows users to explore various travel packages, book tours, and manage their itineraries. The site features high-quality images, customer reviews, and a blog section for travel tips.',
      image: '/api/placeholder/600/400',
      technologies: ['WordPress', 'SEO', 'Custom Booking System'],
      results: ['25% increase in bookings', 'Improved user experience',],
      liveUrl: 'https://voiadventures.com/',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'Insurance Agency Management System',
      category: 'Web App',
      description: 'A comprehensive management system for insurance agencies to handle policies, clients, and claims.',
      detailedDescription: 'Developed a robust web application that streamlines the operations of insurance agencies. Features include policy management, client tracking, claims processing, and reporting tools to enhance efficiency and customer service.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Typescript'],
      results: ['30% reduction in processing time', 'Improved client satisfaction', 'Scalable architecture'],
      liveUrl: 'https://midfair-insurance.vercel.app/',
      githubUrl: null,
      featured: false,
    },
    {
      id: 5,
      title: 'Moroga Wangwi & Associates Advocates Law Firm',
      category: 'Website',
      description: 'A law firm website that showcases their services, team, and client testimonials.',
      detailedDescription: 'Designed and developed a professional website for Moroga Wangwi & Associates Advocates. The site features detailed service descriptions, case studies, and a blog for legal insights.',
      image: '/api/placeholder/600/400',
      technologies: ['WordPress', 'Elementor', 'SEO'],
      results: ['20% increase in client inquiries', 'Enhanced online presence', 'User-friendly navigation'],
      liveUrl: 'https://www.morogalaw.co.ke/',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 6,
      title: 'Ubongo Africa',
      category: 'Website',
      description: 'Interactive portfolio website for an ICT firm.',
      detailedDescription: 'Developed a sleek and modern portfolio website for Ubongo Africa, highlighting their projects, services, and team. The site includes interactive elements and a blog section for industry news.',
      image: '/api/placeholder/600/400',
      technologies: ['WordPress', 'Elementor', 'SEO'],
      results: ['15% increase in project inquiries', 'Improved user engagement', 'Responsive design'],
      liveUrl: 'https://ubongoafrica.com/',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 7,
      title: 'Health Education for Women in Africa (HEWA)',
      category: 'Website',
      description: 'A website for a non-profit organization focused on women\'s health education in Africa.',
      detailedDescription: 'Developed a comprehensive website for HEWA that provides resources, articles, and event information related to women\'s health. The site features donation integration and volunteer sign-up forms to support their mission.',
      image: '/api/placeholder/600/400',
      technologies: ['WordPress', 'Elementor', 'SEO'],
      results: ['30% increase in enquiries on women health', 'Enhanced community outreach', 'User-friendly design'],
      liveUrl: 'https://hewa.org/',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 8,
      title: 'Mount Kenya Wildlife Estate (MKWE)',
      category: 'Website',
      description: 'A website for a luxurious hotel in the Mount Kenya region which offers accommodation for its clientele.',
      detailedDescription: 'Developed a visually stunning website for MKWE that showcases their accommodation options, amenities, and booking system. The site features high-quality images, customer testimonials, and a blog section for travel tips.',
      image: '/api/placeholder/600/400',
      technologies: ['WordPress', 'Elementor', 'SEO'],
      results: ['20% increase in bookings', 'Improved user experience', 'Mobile-friendly design'],
      liveUrl: 'https://mountkenyawe.co.ke/',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 9,
      title: 'Olkondo Safaris',
      category: 'Website',
      description: 'A tours & travel website that offers various travel packages for tourists to various destinations across the world.',
      detailedDescription: 'Developed a dynamic website for Olkondo Safaris that allows users to explore various travel packages, book tours, and manage their itineraries. The site features high-quality images, customer reviews, and a blog section for travel tips.',
      image: '/api/placeholder/600/400',
      technologies: ['WordPress', 'Elementor', 'SEO'],
      results: ['15% increase in project inquiries', 'Improved user engagement', 'Responsive design'],
      liveUrl: 'https://olkondosafaris.com/',
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