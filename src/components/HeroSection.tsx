import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
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
            <span className="text-gradient">SDLC 3.0</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Новый подход к разработке, где AI помогает команде на всех этапах: от постановки задачи до релиза и поддержки продукта
          </p>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Target className="w-4 h-4 text-primary" />
              Меньше рутины
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-primary" />
              Быстрее релизы
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Target className="w-4 h-4 text-primary" />
              Выше качество
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group shadow-custom-lg hover:shadow-custom-xl transition-all duration-300">
              Узнать больше
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="shadow-custom-md">
              Посмотреть примеры
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;