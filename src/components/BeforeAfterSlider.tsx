import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, TrendingDown, Clock, Shield } from "lucide-react";

const BeforeAfterSlider = () => {
  const [sliderValue, setSliderValue] = useState([50]);
  
  const metrics = [
    {
      title: "Lead Time",
      icon: Clock,
      unit: "дней",
      before: 10,
      after: 3,
      description: "Время от написания кода до продакшена"
    },
    {
      title: "Частота релизов",
      icon: TrendingUp,
      unit: "в неделю",
      before: 0.5,
      after: 3.5,
      description: "Количество релизов в неделю"
    },
    {
      title: "Стабильность",
      icon: Shield,
      unit: "% успешных релизов",
      before: 75,
      after: 95,
      description: "Процент релизов без откатов"
    },
    {
      title: "MTTR",
      icon: TrendingDown,
      unit: "часов",
      before: 4,
      after: 1.5,
      description: "Время восстановления после сбоя"
    }
  ];

  const getInterpolatedValue = (before: number, after: number, progress: number) => {
    return before + (after - before) * (progress / 100);
  };

  const getProgressColor = (progress: number) => {
    if (progress < 30) return "text-destructive";
    if (progress < 70) return "text-warning";
    return "text-success";
  };

  const progress = sliderValue[0];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">До и После</span> внедрения SDLC 3.0
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Перемещайте слайдер, чтобы увидеть как изменяются ключевые метрики
          </p>
        </div>

        {/* Slider control */}
        <Card className="p-8 mb-12 bg-gradient-card border-card-border shadow-custom-lg">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Уровень внедрения AI</h3>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>Без AI</span>
              <div className="flex-1 max-w-md mx-4">
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
              <span>Полное внедрение</span>
            </div>
            <div className="mt-4">
              <span className={`text-2xl font-bold ${getProgressColor(progress)}`}>
                {progress}%
              </span>
              <span className="text-muted-foreground ml-2">внедрения</span>
            </div>
          </div>
        </Card>

        {/* Metrics cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const currentValue = getInterpolatedValue(metric.before, metric.after, progress);
            const improvement = ((metric.after - metric.before) / metric.before * 100).toFixed(0);
            const isImprovement = metric.after > metric.before;
            const isReverse = metric.title === "Lead Time" || metric.title === "MTTR";
            
            return (
              <Card key={index} className="p-6 bg-gradient-card border-card-border shadow-custom-md hover:shadow-custom-lg transition-all duration-300 min-h-[280px] flex flex-col">
                <div className="text-center flex-1 flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="font-semibold mb-2">{metric.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed h-8 flex items-start justify-center">
                    {metric.description}
                  </p>
                  
                  <div className="space-y-3 flex-1 flex flex-col justify-between">
                    {/* Current value */}
                    <div className="text-center">
                      <div className={`text-2xl font-bold leading-none ${getProgressColor(progress)}`}>
                        {typeof currentValue === 'number' ? currentValue.toFixed(1) : currentValue}
                      </div>
                      <div className="text-sm text-muted-foreground">{metric.unit}</div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="relative">
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            progress < 30 ? 'bg-destructive' :
                            progress < 70 ? 'bg-warning' : 'bg-success'
                          }`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Before/After values */}
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Было: {metric.before}</span>
                      <span>Цель: {metric.after}</span>
                    </div>
                    
                    {/* Improvement indicator */}
                    {progress > 10 && (
                      <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        isReverse ? 'bg-success/10 text-success' : 'bg-success/10 text-success'
                      }`}>
                        {isReverse ? '-' : '+'}{improvement}%
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Insights */}
        <Card className="mt-12 p-6 bg-primary/5 border-primary/20 shadow-custom-lg">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3 text-primary">
              {progress < 30 && "Начальный этап: Подготовка инфраструктуры"}
              {progress >= 30 && progress < 70 && "Активное внедрение: Первые результаты"}
              {progress >= 70 && "Зрелое внедрение: Максимальная эффективность"}
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              {progress < 30 && "На начальном этапе важно настроить CI/CD, документацию и базовую автоматизацию тестирования."}
              {progress >= 30 && progress < 70 && "AI начинает показывать результаты: сокращается время review, улучшается качество кода."}
              {progress >= 70 && "Команда работает с максимальной эффективностью: быстрые релизы, минимум багов, автоматизированная поддержка."}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;