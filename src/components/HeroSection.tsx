import { Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* AI Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient overlay for lightening effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60"></div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-card-border rounded-full px-4 py-2 mb-8 shadow-custom-md">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Революция в разработке ПО
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">
              <span className="shimmer-text">S</span>
              <span className="shimmer-text">D</span>
              <span className="shimmer-text">L</span>
              <span className="shimmer-text">C</span>
              <span className="shimmer-text">&nbsp;</span>
              <span className="shimmer-text">3</span>
              <span className="shimmer-text">.</span>
              <span className="shimmer-text">0</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            Новый подход к разработке, где AI помогает команде на всех этапах: от постановки задачи до релиза и поддержки продукта
          </p>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm border border-card-border rounded-xl p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">30-50%</div>
              <div className="text-sm text-muted-foreground">Ускорение разработки</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-card-border rounded-xl p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">80%</div>
              <div className="text-sm text-muted-foreground">Покрытие тестами</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-card-border rounded-xl p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">2-3x</div>
              <div className="text-sm text-muted-foreground">Снижение MTTR</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-card-border rounded-xl p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">10→3</div>
              <div className="text-sm text-muted-foreground">Дни до релиза</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;