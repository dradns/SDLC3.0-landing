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
              Автоматизация на каждом этапе
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient-animated">SDLC 3.0</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            <span className="text-gradient-animated font-bold">
              {"AI-ориентированный жизненный цикл разработки:".split("").map((char, index) => (
                <span 
                  key={index} 
                  className="letter-animation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span><br />
            автоматизация, метрики, предсказуемая поставка
          </p>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm border border-card-border rounded-xl p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-all duration-300 min-h-[120px] flex flex-col justify-between">
              <div className="text-3xl font-bold text-primary leading-none">50-70%</div>
              <div className="text-sm text-muted-foreground h-8 flex items-start justify-center">Сокращение Lead Time</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-card-border rounded-xl p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-all duration-300 min-h-[120px] flex flex-col justify-between">
              <div className="text-3xl font-bold text-primary leading-none">2-5x</div>
              <div className="text-sm text-muted-foreground h-8 flex items-start justify-center">Рост частоты деплоев</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-card-border rounded-xl p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-all duration-300 min-h-[120px] flex flex-col justify-between">
              <div className="text-3xl font-bold text-primary leading-none">&lt;15%</div>
              <div className="text-sm text-muted-foreground h-8 flex items-start justify-center">Доля неудачных релизов</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-card-border rounded-xl p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-all duration-300 min-h-[120px] flex flex-col justify-between">
              <div className="text-3xl font-bold text-primary leading-none">2-3x</div>
              <div className="text-sm text-muted-foreground h-8 flex items-start justify-center">Сокращение MTTR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;