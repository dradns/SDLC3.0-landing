import { Card } from "@/components/ui/card";
import { TrendingUp, Zap, Shield, Clock } from "lucide-react";

const MetricsSection = () => {
  const metrics = [
    {
      icon: Clock,
      title: "Lead Time",
      description: "Время от написания кода до релиза",
      improvement: "3 раза быстрее",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Частота релизов",
      description: "Как часто обновляем продукт",
      improvement: "Несколько раз в неделю",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Стабильность релизов",
      description: "Количество откатов и багов",
      improvement: "На 70% меньше откатов",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Время восстановления",
      description: "Как быстро починили после сбоя",
      improvement: "MTTR в 2-3 раза меньше",
      color: "text-orange-600"
    }
  ];

  const examples = [
    {
      metric: "Время от merge до продакшена",
      before: "10 дней",
      after: "3 дня",
      improvement: "-70%"
    },
    {
      metric: "Покрытие тестами",
      before: "45%",
      after: "80%",
      improvement: "+78%"
    },
    {
      metric: "MTTR (время восстановления)",
      before: "4 часа",
      after: "1.5 часа",
      improvement: "-62%"
    },
    {
      metric: "Частота релизов",
      before: "1 раз в 2 недели",
      after: "3-4 раза в неделю",
      improvement: "6x"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Как измеряется <span className="text-gradient">результат</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ключевые показатели, на которые мы смотрим для оценки эффективности SDLC 3.0
          </p>
        </div>

        {/* Key metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="relative p-8 bg-card/50 backdrop-blur-sm border border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-500 group text-center overflow-hidden">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon with enhanced styling */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-500 shadow-lg">
                <metric.icon className="w-8 h-8 text-primary group-hover:text-primary" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{metric.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{metric.description}</p>
                <div className="flex items-center justify-center h-10 bg-gradient-to-r from-success/10 to-success/20 text-success text-sm font-semibold px-6 rounded-full min-w-[160px] shadow-sm border border-success/20">
                  {metric.improvement}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </Card>
          ))}
        </div>

        {/* Real examples */}
        <Card className="p-8 bg-gradient-card border-card-border shadow-custom-lg">
          <h3 className="text-2xl font-bold mb-8 text-center">Реальные примеры улучшений</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-background/50 rounded-lg p-6 border border-card-border">
                <h4 className="font-semibold mb-4 text-foreground">{example.metric}</h4>
                
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Было</div>
                    <div className="text-lg font-semibold text-destructive">{example.before}</div>
                  </div>
                  
                  <div className="flex-1 mx-4 relative">
                    <div className="h-px bg-gradient-to-r from-destructive via-muted to-success"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <TrendingUp className="w-4 h-4 text-success" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Стало</div>
                    <div className="text-lg font-semibold text-success">{example.after}</div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <span className="inline-block bg-success/10 text-success text-sm font-medium px-3 py-1 rounded-full">
                    {example.improvement}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MetricsSection;