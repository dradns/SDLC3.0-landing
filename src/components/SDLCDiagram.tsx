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
      aiRole: "Анализирует контекст, предлагает улучшения ТЗ, генерирует acceptance criteria"
    },
    {
      id: 1,
      icon: Layers,
      title: "Проектирование",
      description: "AI предлагает архитектурные варианты, предупреждает об ошибках",
      aiRole: "Проверяет совместимость с существующей архитектурой, предлагает паттерны"
    },
    {
      id: 2,
      icon: Code,
      title: "Разработка",
      description: "AI генерирует шаблонный код, миграции и автотесты",
      aiRole: "Создает boilerplate код, предлагает рефакторинг, генерирует документацию"
    },
    {
      id: 3,
      icon: Eye,
      title: "Code Review",
      description: "AI проверяет PR, находит баги, предлагает исправления",
      aiRole: "Анализирует качество кода, находит security issues, проверяет стиль"
    },
    {
      id: 4,
      icon: TestTube,
      title: "Тестирование",
      description: "AI запускает только нужные тесты, прогнозирует риск релиза",
      aiRole: "Определяет scope тестирования, анализирует coverage, предсказывает баги"
    },
    {
      id: 5,
      icon: Headphones,
      title: "Поддержка",
      description: "AI классифицирует баги, ищет корневую причину проблем",
      aiRole: "Анализирует логи, группирует инциденты, предлагает hotfix"
    }
  ];

  // Calculate positions for perfect circle
  const getStepPosition = (index: number, total: number, radius: number = 35) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Start from top
    const x = 50 + radius * Math.cos(angle); // Center at 50%
    const y = 50 + radius * Math.sin(angle); // Center at 50%
    return { x, y };
  };

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
          <div className="relative h-[500px] bg-gradient-card rounded-2xl border border-card-border shadow-custom-lg overflow-hidden">
            {/* Connection lines - circular flow */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {steps.map((step, index) => {
                const currentPos = getStepPosition(index, steps.length);
                const nextPos = getStepPosition((index + 1) % steps.length, steps.length);
                
                return (
                  <line
                    key={index}
                    x1={`${currentPos.x}%`}
                    y1={`${currentPos.y}%`}
                    x2={`${nextPos.x}%`}
                    y2={`${nextPos.y}%`}
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray="8,4"
                    className={`transition-all duration-300 ${
                      activeStep === index || activeStep === (index + 1) % steps.length
                        ? 'opacity-100' 
                        : 'opacity-20'
                    }`}
                  />
                );
              })}
              
              {/* Lines from center to each step */}
              {steps.map((step, index) => {
                const stepPos = getStepPosition(index, steps.length);
                return (
                  <line
                    key={`center-${index}`}
                    x1="50%"
                    y1="50%"
                    x2={`${stepPos.x}%`}
                    y2={`${stepPos.y}%`}
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    className={`transition-all duration-300 ${
                      activeStep === index ? 'opacity-60' : 'opacity-10'
                    }`}
                  />
                );
              })}
            </svg>

            {/* Steps positioned in perfect circle */}
            {steps.map((step, index) => {
              const position = getStepPosition(index, steps.length);
              return (
                <div
                  key={step.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                    activeStep === step.id ? 'scale-110 z-10' : 'scale-100 hover:scale-105'
                  }`}
                  style={{ 
                    left: `${position.x}%`, 
                    top: `${position.y}%` 
                  }}
                  onMouseEnter={() => setActiveStep(step.id)}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    activeStep === step.id 
                      ? 'bg-primary border-primary shadow-custom-lg shadow-primary/25' 
                      : 'bg-card border-primary/30 shadow-custom-md hover:border-primary/50 hover:shadow-custom-lg'
                  }`}>
                    <step.icon className={`w-7 h-7 transition-colors duration-300 ${
                      activeStep === step.id ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                  </div>
                  
                  {/* Step label */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 text-center" 
                       style={{
                         top: position.y < 50 ? '100%' : 'auto',
                         bottom: position.y >= 50 ? '100%' : 'auto',
                         marginTop: position.y < 50 ? '8px' : 'auto',
                         marginBottom: position.y >= 50 ? '8px' : 'auto',
                         minWidth: 'max-content'
                       }}>
                     <div className={`text-sm font-medium transition-colors duration-300 px-2 py-1 rounded-md ${
                       activeStep === step.id 
                         ? 'text-primary bg-card border border-primary/20' 
                         : 'text-foreground bg-card border border-border'
                     }`}>
                      {step.title}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* AI Brain in center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-custom-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                <Brain className="w-12 h-12 text-primary-foreground relative z-10" />
              </div>
              <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 text-center">
                <div className="text-sm font-bold text-primary bg-card px-3 py-1 rounded-full border border-primary/20">
                  AI Core
                </div>
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