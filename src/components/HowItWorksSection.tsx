import { Card } from "@/components/ui/card";
import { FileText, Layers, Code, Eye, TestTube, Headphones } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Планирование",
      description: "Формализованные DoR, единая постановка задач, генерация user stories с AI",
      color: "text-blue-600"
    },
    {
      icon: Code,
      title: "Разработка",
      description: "Автоматическая генерация шаблонного кода, миграций, тестов",
      color: "text-green-600"
    },
    {
      icon: Eye,
      title: "Code Review",
      description: "AI-анализ PR, поиск дефектов и уязвимостей до merge",
      color: "text-purple-600"
    },
    {
      icon: TestTube,
      title: "Тестирование",
      description: "Оптимизация набора тестов, прогноз стабильности релиза",
      color: "text-orange-600"
    },
    {
      icon: Layers,
      title: "Деплой",
      description: "Полностью автоматизированный CI/CD, унифицированные пайплайны",
      color: "text-red-600"
    },
    {
      icon: Headphones,
      title: "Поддержка",
      description: "AI-триаж инцидентов, автоматический root cause analysis",
      color: "text-cyan-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Основные изменения в <span className="text-gradient-animated">SDLC 3.0</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Каждый этап жизненного цикла разработки трансформируется с помощью автоматизации и AI-инструментов для повышения эффективности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-card-border shadow-custom-md hover:shadow-custom-lg transition-all duration-300 group relative overflow-hidden">
              {/* Step number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-primary">{index + 1}</span>
              </div>
              
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Process flow visualization */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>
          <div className="relative bg-background px-8 mx-auto w-fit">
            <div className="flex items-center gap-2 text-primary font-medium">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Непрерывный цикл улучшений
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;