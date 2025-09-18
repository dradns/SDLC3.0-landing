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
            <Card key={index} className="p-6 bg-gradient-card border-card-border shadow-custom-md hover:shadow-custom-lg transition-all duration-300 group text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{metric.description}</p>
              <div className="flex items-center justify-center h-8 bg-success/10 text-success text-sm font-medium px-4 rounded-full min-w-[140px]">
                {metric.improvement}
              </div>
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