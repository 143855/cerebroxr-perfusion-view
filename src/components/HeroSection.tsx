import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Brain } from "lucide-react";
import heroBrain from "@/assets/hero-brain-scan.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBrain} 
          alt="Futuristic brain scan visualization" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary rounded-full neural-pulse opacity-60`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 8}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-primary/20 mb-8">
            <Zap className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm gradient-text font-medium">Revolutionary AR/VR Medical Technology</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform
            <span className="gradient-text block">Medical Imaging</span>
            with AR/VR
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
            Convert MRI & CT scan images to immersive perfusion imaging using cutting-edge 
            <span className="gradient-text font-semibold"> Augmented and Virtual Reality</span> technology
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:glow-primary text-lg px-8 py-4 hover-float"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-card-border hover:border-primary text-lg px-8 py-4 hover-glow"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-card p-6 rounded-xl hover-glow">
              <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-foreground-secondary">Accuracy Rate</div>
            </div>
            <div className="glass-card p-6 rounded-xl hover-glow">
              <div className="text-3xl font-bold gradient-text mb-2">10x</div>
              <div className="text-foreground-secondary">Faster Processing</div>
            </div>
            <div className="glass-card p-6 rounded-xl hover-glow">
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <div className="text-foreground-secondary">Medical Centers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;