import { Card } from "@/components/ui/card";
import { Brain, Workflow, Rocket } from "lucide-react";
const WhatIsSection = () => {
  return <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Определение <span className="text-gradient-animated">SDLC 3.0</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">SDLC 3.0 — модель жизненного цикла разработки ПО, где на каждом этапе применяются автоматизация, метрики и AI-инструменты для сокращения ручных операций и ускорения поставки изменений.
        </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-gradient-card border-card-border shadow-custom-md hover:shadow-custom-lg transition-all duration-300 group">
            <div className="mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Автоматизация</h3>
              <p className="text-muted-foreground leading-relaxed">
                Автоматическая генерация шаблонного кода, миграций, тестов и AI-анализ PR с поиском дефектов и уязвимостей
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card border-card-border shadow-custom-md hover:shadow-custom-lg transition-all duration-300 group">
            <div className="mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Workflow className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Метрики качества</h3>
              <p className="text-muted-foreground leading-relaxed">
                Настроенные DORA-метрики для измерения качества и скорости, A/B-эксперименты на реальных задачах
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card border-card-border shadow-custom-md hover:shadow-custom-lg transition-all duration-300 group">
            <div className="mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-инструменты</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI-триаж инцидентов, автоматический root cause analysis, прогноз стабильности релиза
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default WhatIsSection;