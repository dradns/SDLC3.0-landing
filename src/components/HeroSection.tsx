import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* AI Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(/fon.jpg)` }}
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
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-custom-md">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Революция в разработке ПО
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient-animated">SDLC 3.0</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            <span className="text-gradient-animated font-bold text-xl sm:text-2xl md:text-3xl">AI-ориентированный жизненный цикл разработки:</span><br />
            <span className="mt-4 inline-block text-lg sm:text-xl md:text-2xl bg-background/20 backdrop-blur-sm px-3 py-2 rounded-2xl">автоматизация  •  метрики  •  предсказуемая поставка</span>
          </p>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-all duration-300 min-h-[100px] sm:min-h-[120px] flex flex-col justify-between">
              <div className="text-2xl sm:text-3xl font-bold text-primary leading-none">50-70%</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-2 flex items-center justify-center">Сокращение Lead Time</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-all duration-300 min-h-[100px] sm:min-h-[120px] flex flex-col justify-between">
              <div className="text-2xl sm:text-3xl font-bold text-primary leading-none">2-5x</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-2 flex items-center justify-center">Рост частоты деплоев</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-all duration-300 min-h-[100px] sm:min-h-[120px] flex flex-col justify-between">
              <div className="text-2xl sm:text-3xl font-bold text-primary leading-none">&lt;15%</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-2 flex items-center justify-center">Доля неудачных релизов</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-all duration-300 min-h-[100px] sm:min-h-[120px] flex flex-col justify-between">
              <div className="text-2xl sm:text-3xl font-bold text-primary leading-none">2-3x</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-2 flex items-center justify-center">Сокращение MTTR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;