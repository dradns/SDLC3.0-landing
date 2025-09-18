import { Card } from "@/components/ui/card";
import { AlertTriangle, Clock, Users, Bug } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Слишком много ручных шагов",
      description: "Релизы затягиваются из-за рутинных операций и ручных проверок"
    },
    {
      icon: AlertTriangle,
      title: "Непрозрачные сроки",
      description: "Сложно предсказать, когда фича будет готова к выходу в продакшн"
    },
    {
      icon: Users,
      title: "Долгое освоение проекта",
      description: "Новички тратят много времени на понимание архитектуры и процессов"
    },
    {
      icon: Bug,
      title: "Поздние баги",
      description: "Критические ошибки находят уже после релиза в продакшн"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Почему это <span className="text-gradient">важно</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Частые проблемы команд разработки, которые замедляют выпуск качественных продуктов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 bg-card border-card-border shadow-custom-md hover:shadow-custom-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
            <AlertTriangle className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              AI помогает автоматизировать и ускорять эти процессы
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;