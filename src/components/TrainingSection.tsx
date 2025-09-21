import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Target, Workflow, CheckCircle, Clock, TrendingUp, BookOpen, Users } from "lucide-react";
import { useState } from "react";

const TrainingSection = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const courseModules = [
    {
      id: "artifacts",
      title: "Создание артефактов",
      description: "User Story, Use Case, критерии приёмки",
      icon: Target,
      metrics: {
        quality: "+85%",
        speed: "3x быстрее",
        errors: "-70%"
      },
      examples: [
        "Генерация User Story по описанию функции",
        "Автоматическая проверка критериев приёмки",
        "Создание шаблонов для команды"
      ]
    },
    {
      id: "formalization",
      title: "Формализация требований",
      description: "Интеграция с CI/CD пайплайнами",
      icon: Workflow,
      metrics: {
        integration: "+90%",
        consistency: "100%",
        deployment: "2x быстрее"
      },
      examples: [
        "Связывание требований с задачами",
        "Автоматическое обновление статусов",
        "Трекинг изменений в реальном времени"
      ]
    },
    {
      id: "quality",
      title: "Контроль качества",
      description: "Предотвращение ошибок и несогласованностей",
      icon: CheckCircle,
      metrics: {
        defects: "-80%",
        reviews: "4x быстрее",
        rework: "-60%"
      },
      examples: [
        "Автоматическая проверка на противоречия",
        "Валидация требований",
        "Контроль полноты спецификаций"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Курс для аналитиков: работа с AI в SDLC 3.0
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Курс Analyst.AIIDEBAS учит практическому применению AI в аналитике
          </p>
        </div>

        {/* Модули курса с интерактивностью */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {courseModules.map((module) => {
            const IconComponent = module.icon;
            const isSelected = selectedModule === module.id;
            
            return (
              <Card 
                key={module.id}
                className={`cursor-pointer transition-all duration-300 group ${
                  isSelected 
                    ? 'border-primary shadow-xl scale-105 bg-primary/5' 
                    : 'border-card-border hover:border-primary/50 hover:shadow-lg'
                }`}
                onClick={() => setSelectedModule(isSelected ? null : module.id)}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto p-3 rounded-lg transition-all duration-300 ${
                    isSelected ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </CardHeader>
                <CardContent>
                  {isSelected && (
                    <div className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-2">
                      {/* Метрики модуля */}
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {Object.entries(module.metrics).map(([key, value]) => (
                          <div key={key} className="bg-background/50 rounded-lg p-2">
                            <div className="text-lg font-bold text-green-600">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Примеры применения */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Практические кейсы:</h4>
                        {module.examples.map((example, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Результаты курса */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
              <GraduationCap className="w-6 h-6 text-green-600" />
              Результат обучения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Что получают аналитики:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Быстрое освоение AI-инструментов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Повышение качества спецификаций</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Сокращение времени от идеи до готовой задачи</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Улучшение метрик:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-background/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-600">30-40%</div>
                    <div className="text-sm text-muted-foreground">Ускорение постановки задач</div>
                  </div>
                  <div className="text-center bg-background/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-600">70%</div>
                    <div className="text-sm text-muted-foreground">Снижение переделок</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Подсказка для интерактивности */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4" />
            Кликните на модули курса выше для просмотра подробной информации
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;