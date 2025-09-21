import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, GitBranch, BookOpen, TrendingUp, Settings, BarChart3, Zap, Shield, Palette, Users } from "lucide-react";
import { useState } from "react";

const AnalyticsAISection = () => {
  const [hoveredMode, setHoveredMode] = useState<string | null>(null);

  const analystModes = [
    {
      id: "business-analyst",
      icon: FileText,
      title: "Бизнес-аналитик",
      description: "Автоматизация создания пользовательских историй и требований",
      capabilities: [
        "User Story и Use Case",
        "Диаграммы активности PlantUML", 
        "Критерии приёмки",
        "Глоссарий проекта",
        "Анализ заинтересованных сторон"
      ],
      improvement: "60-70%"
    },
    {
      id: "system-analyst", 
      icon: GitBranch,
      title: "Системный аналитик",
      description: "Проектирование архитектуры и API спецификаций",
      capabilities: [
        "Backend логика",
        "ER-диаграммы",
        "Sequence диаграммы", 
        "OpenAPI/AsyncAPI спецификации",
        "Нефункциональные требования"
      ],
      improvement: "65-75%"
    },
    {
      id: "architect",
      icon: BookOpen,
      title: "Архитектор решений",
      description: "Создание высокоуровневой архитектуры системы",
      capabilities: [
        "Диаграммы контекста",
        "Диаграммы компонентов",
        "Архитектурные решения",
        "Системная интеграция"
      ],
      improvement: "70-80%"
    },
    {
      id: "reviewer",
      icon: Shield,
      title: "Ревьюер",
      description: "Контроль качества артефактов и архитектурных решений",
      capabilities: [
        "Проверка качества требований",
        "Аудит кибербезопасности",
        "Валидация архитектуры",
        "Инженерная поддержка"
      ],
      improvement: "50-60%"
    },
    {
      id: "designer",
      icon: Palette,
      title: "Дизайнер",
      description: "Создание прототипов и пользовательских интерфейсов",
      capabilities: [
        "Мокапы и wireframe",
        "Прототипирование",
        "UX/UI дизайн",
        "Пользовательские сценарии"
      ],
      improvement: "55-65%"
    },
    {
      id: "project-manager",
      icon: Users,
      title: "Проектный менеджер",
      description: "Управление задачами и планирование спринтов",
      capabilities: [
        "Формирование бэклога спринта",
        "Постановка задач",
        "Приоритизация",
        "Управление зависимостями"
      ],
      improvement: "45-55%"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Внедрение AI инструментов <span className="text-primary">в бизнес- и системный анализ</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            AI IDE BAS интегрируется прямо в рабочий процесс SDLC 3.0, превращая каждого аналитика 
            в высокопроизводительного специалиста с поддержкой искусственного интеллекта.
          </p>
        </div>

        {/* Режимы аналитика */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {analystModes.map((mode) => {
            const IconComponent = mode.icon;
            const isHovered = hoveredMode === mode.id;
            
            return (
              <Card 
                key={mode.id}
                className={`cursor-pointer transition-all duration-300 group ${
                  isHovered 
                    ? 'border-primary shadow-lg scale-105 bg-primary/5' 
                    : 'border-card-border hover:border-primary/50'
                }`}
                onMouseEnter={() => setHoveredMode(mode.id)}
                onMouseLeave={() => setHoveredMode(null)}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto p-3 rounded-lg transition-all duration-300 ${
                    isHovered ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{mode.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{mode.description}</p>
                  
                  {/* Показываем возможности при наведении */}
                  {isHovered && (
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border animate-in fade-in-0 slide-in-from-bottom-2">
                      <div className="space-y-2 mb-4">
                        {mode.capabilities.map((capability, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>{capability}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-center gap-2 pt-2 border-t">
                        <Zap className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-bold text-green-600">
                          Ускорение на {mode.improvement}
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Ключевые преимущества AI IDE BAS в SDLC 3.0 */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                Интеграция в VS Code/Cursor/Windsurf
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                AI IDE BAS работает как расширение в привычных IDE, обеспечивая 
                бесшовную интеграцию в существующий рабочий процесс команды.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Единая среда разработки для всех ролей</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Автоматическая синхронизация артефактов</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Контроль версий для всех документов</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Метрики и качество
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                AI анализирует каждый артефакт на соответствие стандартам, 
                обеспечивая единое качество документации по всему проекту.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Автоматическая проверка критериев приёмки</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Валидация диаграмм и схем</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Мониторинг покрытия требований</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Влияние на SDLC 3.0 */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Эффект на весь жизненный цикл SDLC 3.0
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 text-center mb-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-destructive">3-5 недель</div>
                <div className="text-sm text-muted-foreground">Фаза анализа без AI</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-destructive to-green-600 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">1-2 недели</div>
                <div className="text-sm text-muted-foreground">Фаза анализа с AI IDE BAS</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div className="p-4 bg-background/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">70%</div>
                <p className="text-sm text-muted-foreground">
                  Сокращение времени на создание технической документации
                </p>
              </div>
              <div className="p-4 bg-background/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">85%</div>
                <p className="text-sm text-muted-foreground">
                  Снижение ошибок в требованиях на входе в разработку
                </p>
              </div>
            </div>

            <div className="text-center mt-6 p-4 bg-background/80 rounded-lg border">
              <p className="text-lg font-semibold text-primary">
                Результат: качественная аналитика становится катализатором для всего SDLC 3.0 процесса
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            AI IDE BAS доступен для VS Code, Cursor и Windsurf IDE
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsAISection;