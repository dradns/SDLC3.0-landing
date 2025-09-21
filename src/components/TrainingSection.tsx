import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Brain, CheckCircle, Clock, Users, BookOpen, ArrowRight } from "lucide-react";

const TrainingSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <a 
            href="https://analyst.aiidebas.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Обучение аналитиков <span className="text-gradient-animated">созданию AI-агентов</span>
            </h2>
            <div className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium text-lg -mt-2">
              Онлайн-курс «Системный Аналитик 3.0» →
            </div>
          </a>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-4">
            Готовит специалистов для работы в новой парадигме разработки с AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Левая колонка - о курсе */}
          <Card className="border-card-border">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Brain className="w-6 h-6 text-primary" />
                От идеи к AI-агенту
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                12 недель практического обучения, где аналитики изучают создание AI-агентов и интеграцию искусственного интеллекта в процессы SDLC 3.0.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">1</div>
                  <span className="text-sm">Бизнес-требования (User Stories, BPMN)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">2</div>
                  <span className="text-sm">Системная архитектура (API, ERD)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">3</div>
                  <span className="text-sm">Реализация AI-агента</span>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <p className="text-sm font-medium text-primary">
                  Результат: готовый AI-агент в портфолио как доказательство навыков в аналитике нового поколения
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Правая колонка - интеграция с SDLC 3.0 */}
          <Card className="border-card-border">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Роль в SDLC 3.0
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Обученные аналитики становятся ключевым звеном в цикле SDLC 3.0, ускоряя весь процесс разработки с самого начала.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Ускорение планирования</p>
                    <p className="text-xs text-muted-foreground">AI помогает генерировать требования в 3-4 раза быстрее</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Улучшение качества</p>
                    <p className="text-xs text-muted-foreground">Снижение ошибок на входе уменьшает переделки</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Автоматизация процессов</p>
                    <p className="text-xs text-muted-foreground">Интеграция с CI/CD с самого этапа анализа</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">30-40%</div>
                  <div className="text-sm text-muted-foreground">сокращение Lead Time начинается с улучшенной аналитики</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Связь с основными принципами */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              Как курс поддерживает принципы SDLC 3.0
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-lg font-semibold text-primary">Автоматизация</div>
                <p className="text-sm text-muted-foreground">AI-инструменты для генерации документации и требований</p>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-semibold text-primary">Метрики качества</div>
                <p className="text-sm text-muted-foreground">Измеримое улучшение скорости и точности аналитики</p>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-semibold text-primary">AI-инструменты</div>
                <p className="text-sm text-muted-foreground">Практическое создание собственного AI-агента</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Краткая информация о формате */}
        <div className="text-center mt-8 space-y-4">
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 недель</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Бесплатно</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Онлайн</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Подробнее о программе курса на{" "}
            <a href="https://analyst.aiidebas.com/" target="_blank" rel="noopener noreferrer" 
               className="text-primary hover:underline inline-flex items-center gap-1">
              analyst.aiidebas.com
              <ArrowRight className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;