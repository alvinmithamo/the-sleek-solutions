import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';

const BlogSection = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Discover the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to progressive web apps.',
    content: 'As we move through 2024, the web development landscape continues to evolve at breakneck speed. From the integration of artificial intelligence to the rise of edge computing, developers must stay ahead of the curve to deliver exceptional user experiences...',
    author: 'Admin',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Technology',
    image: '/api/placeholder/800/400',
    featured: true,
  };

  const blogPosts = [
    {
      id: 2,
      title: '10 Essential UX Principles for Modern Web Design',
      excerpt: 'Learn the fundamental UX principles that every designer should know to create intuitive and engaging user experiences.',
      author: 'Admin',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Design',
      image: '/api/placeholder/400/250',
    },
    {
      id: 3,
      title: 'Optimizing Website Performance: A Complete Guide',
      excerpt: 'Comprehensive strategies to boost your website speed and performance for better user experience and SEO rankings.',
      author: 'Admin',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Performance',
      image: '/api/placeholder/400/250',
    },
    {
      id: 4,
      title: 'Digital Marketing Trends That Will Dominate 2024',
      excerpt: 'Explore the latest digital marketing strategies and trends that businesses need to adopt to stay competitive.',
      author: 'Admin',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Marketing',
      image: '/api/placeholder/400/250',
    },
    {
      id: 5,
      title: 'Building Scalable Web Applications with Modern Architecture',
      excerpt: 'Best practices for architecting web applications that can grow with your business needs.',
      author: 'Admin',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Architecture',
      image: '/api/placeholder/400/250',
    },
    {
      id: 6,
      title: 'The Rise of AI in Web Development: Tools and Techniques',
      excerpt: 'How artificial intelligence is revolutionizing web development workflows and what it means for developers.',
      author: 'Admin',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'AI',
      image: '/api/placeholder/400/250',
    },
  ];

  const categories = ['All', 'Technology', 'Design', 'Performance', 'Marketing', 'Architecture', 'AI'];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 bg-background-secondary relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-brand-green/10 text-brand-green text-sm font-heading font-semibold px-4 py-2 rounded-full mb-4">
            Insights & Blog
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Latest Insights &
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Trends</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-body leading-relaxed">
            Stay updated with the latest trends, insights, and best practices in web development, design, and digital marketing.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 animate-slide-up">
          <Card className="bg-card/50 backdrop-blur-sm border-card-hover overflow-hidden group hover:border-brand-green/50 transition-all duration-300 hover:shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Featured Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-64 lg:h-full bg-gradient-to-br from-brand-green/20 to-neon-cyan/20 flex items-center justify-center">
                  <Tag className="w-16 h-16 text-brand-green group-hover:scale-110 transition-transform duration-300" />
                </div>
                <Badge className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground">
                  Featured
                </Badge>
              </div>

              {/* Featured Content */}
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="text-brand-green border-brand-green/30 w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-brand-green transition-colors duration-300">
                  {featuredPost.title}
                </h3>
                
                <p className="text-foreground/70 font-body leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center space-x-6 text-sm text-foreground/60 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span className="font-body">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-body">{formatDate(featuredPost.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-body">{featuredPost.readTime}</span>
                  </div>
                </div>

                <Button variant="neon" className="group w-fit">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant="glass"
              size="sm"
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="bg-card/50 backdrop-blur-sm border-card-hover overflow-hidden group hover:border-brand-green/50 transition-all duration-300 hover:shadow-card hover:transform hover:scale-105 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-brand-green/20 to-neon-purple/20 flex items-center justify-center">
                  <Tag className="w-8 h-8 text-brand-green group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <Badge variant="outline" className="text-brand-green border-brand-green/30 mb-3">
                  {post.category}
                </Badge>
                
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-brand-green transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-foreground/70 font-body text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-3 h-3" />
                    <span className="font-body">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3" />
                    <span className="font-body">{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-foreground/50 font-body">
                    {formatDate(post.date)}
                  </span>
                  <Button variant="minimal" size="sm" className="group p-0 h-auto">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-primary p-8 rounded-2xl text-center animate-slide-up">
          <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
            Stay Updated with Our Newsletter
          </h3>
          <p className="text-primary-foreground/80 mb-6 font-body">
            Get the latest insights, trends, and tips delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 font-body"
            />
            <Button variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-neon-cyan/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-brand-green/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default BlogSection;