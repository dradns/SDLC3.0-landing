import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Target, Database, Brain, CheckCircle, Clock, TrendingUp, BookOpen, Users, FileText, Workflow, Code } from "lucide-react";
import { useState } from "react";

const TrainingSection = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const courseModules = [
    {
      id: "business",
      title: "Бизнес-требования",
      duration: "4 недели",
      description: "Переводите идеи бизнеса в чёткие требования",
      icon: Target,
      skills: [
        "Определение целей и границ проекта",
        "Создание User Stories и Use Cases",
        "Прототипирование интерфейсов",
        "Построение BPMN-схем и Activity Diagram"
      ],
      result: "Готовый набор бизнес-требований для AI-агента"
    },
    {
      id: "system",
      title: "Системные требования",
      duration: "4 недели", 
      description: "Описывайте архитектуру и работу системы",
      icon: Database,
      skills: [
        "Проектирование архитектуры системы",
        "Создание модели данных и ERD",
        "Диаграммы последовательности",
        "Документирование API с Swagger"
      ],
      result: "Полный набор системных требований для AI-агента"
    },
    {
      id: "ai-agent",
      title: "Реализация AI-агента",
      duration: "4 недели",
      description: "Создайте работающего AI-ассистента",
      icon: Brain,
      skills: [
        "Выбор и подключение LLM",
        "Разработка логики работы агента",
        "Тестирование и оптимизация ответов",
        "Деплой агента"
      ],
      result: "Готовый AI-агент в портфолио"
    }
  ];

  const courseFeatures = [
    {
      icon: Clock,
      title: "12 недель бесплатно",
      description: "Интенсивное обучение с еженедельными заданиями"
    },
    {
      icon: Users,
      title: "Поддержка сообщества",
      description: "Еженедельные встречи и общий чат участников"
    },
    {
      icon: Code,
      title: "Практический подход",
      description: "Создание AI-агента с нуля, реализация артефактов"
    },
    {
      icon: TrendingUp,
      title: "Карьерная поддержка",
      description: "Подготовка к собеседованиям и трудоустройству"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Курс «Системный Аналитик 3.0»
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
            Станьте аналитиком 3.0 — архитектором будущего на стыке бизнес-анализа и AI
          </p>
          <p className="text-xl font-semibold text-primary">
            12 недель бесплатного обучения, где вы научитесь создавать AI агента с нуля
          </p>
        </div>

        {/* Особенности курса */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courseFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center border-card-border hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto p-3 rounded-lg bg-primary/10 text-primary w-fit">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Модули курса */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Программа курса</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {courseModules.map((module) => {
              const IconComponent = module.icon;
              const isSelected = selectedModule === module.id;
              
              return (
                <Card 
                  key={module.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    isSelected 
                      ? 'border-primary shadow-xl scale-105 bg-primary/5' 
                      : 'border-card-border hover:border-primary/50 hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedModule(isSelected ? null : module.id)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg transition-all duration-300 ${
                        isSelected ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{module.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{module.duration}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{module.description}</p>
                  </CardHeader>
                  
                  {isSelected && (
                    <CardContent className="animate-in fade-in-0 slide-in-from-bottom-2">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Чему научитесь:</h4>
                          <ul className="space-y-1">
                            {module.skills.map((skill, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                          <p className="text-sm font-medium text-green-800 dark:text-green-200">
                            <strong>Результат:</strong> {module.result}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* Кому подойдет курс */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              Кому подойдет курс
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Курс для вас, если вы:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Студент</strong> — хотите быстрый старт в аналитике</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Junior-аналитик</strong> — нужна систематизация знаний</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Специалист</strong> — расширяете компетенции в AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Опытный аналитик</strong> — изучаете современные AI-инструменты</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Важные требования:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Базовые навыки программирования (Python)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Готовность к общению в команде</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>80 часов времени в течение 12 недель</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Подсказка */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4" />
            Кликните на модули программы для просмотра подробной информации
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;