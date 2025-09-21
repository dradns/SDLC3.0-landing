import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, GitBranch, BookOpen, TrendingUp, MousePointer, BarChart3 } from "lucide-react";
import { useState } from "react";

const AnalyticsAISection = () => {
  const [hoveredArtifact, setHoveredArtifact] = useState<string | null>(null);

  const artifacts = [
    {
      id: "user-story",
      icon: FileText,
      title: "User Story и Use Case",
      description: "Автоматическая генерация черновиков, проверка критериев приёмки",
      timeBefore: "4-6 часов",
      timeAfter: "1-2 часа",
      improvement: "60%"
    },
    {
      id: "diagrams",
      icon: GitBranch,
      title: "Диаграммы и схемы",
      description: "Быстрая генерация PlantUML или BPMN диаграмм",
      timeBefore: "3-4 часа",
      timeAfter: "30-45 мин",
      improvement: "75%"
    },
    {
      id: "glossary",
      icon: BookOpen,
      title: "Глоссарии и требования",
      description: "Унификация терминов и проверка согласованности",
      timeBefore: "2-3 часа",
      timeAfter: "45-60 мин",
      improvement: "70%"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Внедрение AI инструментов в бизнес- и системный анализ
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            В SDLC 3.0 аналитическая работа становится частью единого управляемого цикла.
            AI IDE BAS помогает аналитикам и архитекторам автоматизировать ключевые артефакты:
          </p>
        </div>

        {/* Карта артефактов аналитика */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {artifacts.map((artifact) => {
            const IconComponent = artifact.icon;
            const isHovered = hoveredArtifact === artifact.id;
            
            return (
              <Card 
                key={artifact.id}
                className={`cursor-pointer transition-all duration-300 group ${
                  isHovered 
                    ? 'border-primary shadow-lg scale-105 bg-primary/5' 
                    : 'border-card-border hover:border-primary/50'
                }`}
                onMouseEnter={() => setHoveredArtifact(artifact.id)}
                onMouseLeave={() => setHoveredArtifact(null)}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto p-3 rounded-lg transition-all duration-300 ${
                    isHovered ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{artifact.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{artifact.description}</p>
                  
                  {/* Показываем метрики при наведении */}
                  {isHovered && (
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border animate-in fade-in-0 slide-in-from-bottom-2">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Раньше:</span>
                        <span className="text-sm font-medium text-destructive">{artifact.timeBefore}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">С AI:</span>
                        <span className="text-sm font-medium text-green-600">{artifact.timeAfter}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 pt-2 border-t">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-bold text-green-600">
                          Ускорение на {artifact.improvement}
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Сравнение времени до/после */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <BarChart3 className="w-6 h-6 text-primary" />
              Эффект внедрения AI IDE BAS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-destructive">8-13 часов</div>
                <div className="text-sm text-muted-foreground">Время на аналитику без AI</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-destructive to-green-600 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">3-4 часа</div>
                <div className="text-sm text-muted-foreground">Время с AI IDE BAS</div>
              </div>
            </div>
            <div className="text-center mt-6 p-4 bg-background/50 rounded-lg">
              <p className="text-lg font-semibold text-primary">
                Результат: меньше ошибок в документации, ускоренное согласование требований, единый формат артефактов
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <MousePointer className="w-4 h-4" />
            Наведите курсор на карточки выше для просмотра детальных метрик
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsAISection;