import { useState } from "react";
import { Card } from "@/components/ui/card";
import { FileText, Layers, Code, Eye, TestTube, Headphones, Brain, ArrowRight } from "lucide-react";

const SDLCDiagram = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      icon: FileText,
      title: "Постановка задачи",
      description: "AI формулирует user stories, находит пробелы в требованиях",
      aiRole: "Анализирует контекст, предлагает улучшения ТЗ, генерирует acceptance criteria",
      position: { x: 10, y: 20 }
    },
    {
      id: 1,
      icon: Layers,
      title: "Проектирование",
      description: "AI предлагает архитектурные варианты, предупреждает об ошибках",
      aiRole: "Проверяет совместимость с существующей архитектурой, предлагает паттерны",
      position: { x: 30, y: 10 }
    },
    {
      id: 2,
      icon: Code,
      title: "Разработка",
      description: "AI генерирует шаблонный код, миграции и автотесты",
      aiRole: "Создает boilerplate код, предлагает рефакторинг, генерирует документацию",
      position: { x: 50, y: 5 }
    },
    {
      id: 3,
      icon: Eye,
      title: "Code Review",
      description: "AI проверяет PR, находит баги, предлагает исправления",
      aiRole: "Анализирует качество кода, находит security issues, проверяет стиль",
      position: { x: 70, y: 10 }
    },
    {
      id: 4,
      icon: TestTube,
      title: "Тестирование",
      description: "AI запускает только нужные тесты, прогнозирует риск релиза",
      aiRole: "Определяет scope тестирования, анализирует coverage, предсказывает баги",
      position: { x: 90, y: 20 }
    },
    {
      id: 5,
      icon: Headphones,
      title: "Поддержка",
      description: "AI классифицирует баги, ищет корневую причину проблем",
      aiRole: "Анализирует логи, группирует инциденты, предлагает hotfix",
      position: { x: 70, y: 40 }
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Интерактивная <span className="text-gradient">схема SDLC</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Наведите на этапы, чтобы увидеть роль AI в каждом процессе
          </p>
        </div>

        <div className="relative">
          {/* Main diagram */}
          <div className="relative h-96 bg-gradient-card rounded-2xl border border-card-border shadow-custom-lg overflow-hidden">
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {steps.slice(0, -1).map((step, index) => {
                const nextStep = steps[index + 1];
                return (
                  <line
                    key={index}
                    x1={`${step.position.x + 5}%`}
                    y1={`${step.position.y + 10}%`}
                    x2={`${nextStep.position.x + 5}%`}
                    y2={`${nextStep.position.y + 10}%`}
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className={`transition-all duration-300 ${
                      activeStep === index || activeStep === index + 1 
                        ? 'opacity-100' 
                        : 'opacity-30'
                    }`}
                  />
                );
              })}
            </svg>

            {/* Steps */}
            {steps.map((step) => (
              <div
                key={step.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                  activeStep === step.id ? 'scale-110 z-10' : 'scale-100 hover:scale-105'
                }`}
                style={{ 
                  left: `${step.position.x}%`, 
                  top: `${step.position.y}%` 
                }}
                onMouseEnter={() => setActiveStep(step.id)}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  activeStep === step.id 
                    ? 'bg-primary border-primary shadow-custom-lg' 
                    : 'bg-card border-primary/30 shadow-custom-md'
                }`}>
                  <step.icon className={`w-8 h-8 transition-colors duration-300 ${
                    activeStep === step.id ? 'text-primary-foreground' : 'text-primary'
                  }`} />
                </div>
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center min-w-max">
                  <div className={`text-sm font-medium transition-colors duration-300 ${
                    activeStep === step.id ? 'text-primary' : 'text-foreground'
                  }`}>
                    {step.title}
                  </div>
                </div>
              </div>
            ))}

            {/* AI Brain in center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-custom-xl animate-pulse">
                <Brain className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center">
                <div className="text-sm font-bold text-primary">AI Core</div>
              </div>
            </div>
          </div>

          {/* Active step details */}
          <Card className="mt-8 p-6 bg-gradient-card border-card-border shadow-custom-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                {steps[activeStep] && (() => {
                  const IconComponent = steps[activeStep].icon;
                  return <IconComponent className="w-6 h-6 text-primary" />;
                })()}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{steps[activeStep]?.title}</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">{steps[activeStep]?.description}</p>
                <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Роль AI:</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{steps[activeStep]?.aiRole}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SDLCDiagram;