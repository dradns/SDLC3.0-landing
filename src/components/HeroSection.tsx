import { Zap } from "lucide-react";
import DotPattern from "./DotPattern";
import VSCodeMockup from "./VSCodeMockup";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* VS Code style dot pattern */}
      <DotPattern />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-muted border border-border rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Революция в разработке ПО
              </span>
            </div>

            {/* Main heading */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                AI-powered<br />
                <span className="text-primary">SDLC 3.0</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Новый подход к разработке, где искусственный интеллект помогает команде на всех этапах: от анализа требований до релиза и поддержки продукта
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-foreground">30-50%</div>
                <div className="text-sm text-muted-foreground">Ускорение разработки</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">80%</div>
                <div className="text-sm text-muted-foreground">Покрытие тестами</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">2-3x</div>
                <div className="text-sm text-muted-foreground">Снижение MTTR</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">10→3</div>
                <div className="text-sm text-muted-foreground">Дни до релиза</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <VSCodeMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;