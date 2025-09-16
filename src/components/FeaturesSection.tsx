import { Scan, Headphones, Zap, Shield, Clock, Users } from "lucide-react";
import arVrMedical from "@/assets/ar-vr-medical.jpg";
import dataFlow from "@/assets/data-flow.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Scan,
      title: "MRI & CT Conversion",
      description: "Advanced algorithms convert traditional medical scans into detailed perfusion imaging with unprecedented accuracy.",
      color: "primary",
    },
    {
      icon: Headphones,
      title: "AR/VR Visualization",
      description: "Immersive 3D visualization allows medical professionals to explore anatomical structures in virtual reality.",
      color: "secondary",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast processing ensures immediate results, reducing patient wait times and improving workflow.",
      color: "accent",
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security ensures all patient data remains protected and compliant with medical standards.",
      color: "primary",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Cloud-based infrastructure ensures your imaging platform is always available when you need it.",
      color: "secondary",
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description: "Multi-user environment allows teams to collaborate on diagnoses and share insights in real-time.",
      color: "accent",
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cutting-Edge
            <span className="gradient-text block">Medical Technology</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            Revolutionizing medical imaging with state-of-the-art AR/VR technology that transforms 
            how healthcare professionals visualize and interpret diagnostic data.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-xl hover-float border border-card-border group"
            >
              <div className={`p-4 rounded-lg bg-gradient-${feature.color} glow-${feature.color} mb-6 w-fit group-hover:neural-pulse`}>
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-foreground-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Technology Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Immersive
              <span className="gradient-text"> Medical Visualization</span>
            </h3>
            <p className="text-lg text-foreground-secondary mb-8 leading-relaxed">
              Our proprietary AR/VR technology transforms static medical scans into dynamic, 
              interactive 3D environments. Healthcare professionals can walk through neural 
              pathways, examine tissue perfusion in real-time, and collaborate with colleagues 
              in virtual spaces.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full neural-pulse"></div>
                <span className="text-foreground">360° anatomical exploration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full neural-pulse" style={{animationDelay: '0.5s'}}></div>
                <span className="text-foreground">Multi-layer tissue visualization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full neural-pulse" style={{animationDelay: '1s'}}></div>
                <span className="text-foreground">Real-time perfusion mapping</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="scan-line rounded-xl overflow-hidden">
              <img 
                src={arVrMedical} 
                alt="AR/VR Medical Technology" 
                className="w-full h-auto rounded-xl glass-card hover-glow"
              />
            </div>
          </div>
        </div>

        {/* Data Processing Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          {/* Image */}
          <div className="relative">
            <div className="scan-line rounded-xl overflow-hidden">
              <img 
                src={dataFlow} 
                alt="Medical Data Processing" 
                className="w-full h-auto rounded-xl glass-card hover-glow"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced
              <span className="gradient-text"> Data Processing</span>
            </h3>
            <p className="text-lg text-foreground-secondary mb-8 leading-relaxed">
              Our AI-powered processing engine analyzes MRI and CT scan data with machine learning 
              algorithms, automatically detecting anomalies and generating detailed perfusion maps 
              with clinical-grade precision.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-tech-cyan rounded-full neural-pulse"></div>
                <span className="text-foreground">AI-enhanced image reconstruction</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-neural-violet rounded-full neural-pulse" style={{animationDelay: '0.5s'}}></div>
                <span className="text-foreground">Automated anomaly detection</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-medical-teal rounded-full neural-pulse" style={{animationDelay: '1s'}}></div>
                <span className="text-foreground">Clinical-grade accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;