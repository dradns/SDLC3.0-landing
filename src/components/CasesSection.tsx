import { Card } from "@/components/ui/card";
import { Building2, Smartphone, Globe, ShoppingCart } from "lucide-react";
const CasesSection = () => {
  const cases = [{
    icon: Building2,
    company: "FinTech стартап",
    industry: "Финансовые технологии",
    challenge: "Команда из 8 разработчиков не успевала выпускать фичи для быстрорастущего продукта",
    solution: "Внедрили AI-помощника для code review и автогенерации тестов",
    results: ["Время релиза сократилось с 2 недель до 4 дней", "Покрытие тестами выросло с 45% до 85%", "Количество продакшн багов снизилось на 60%"],
    metrics: {
      leadTime: "-75%",
      bugReduction: "-60%",
      testCoverage: "+89%"
    }
  }, {
    icon: Smartphone,
    company: "Мобильное приложение",
    industry: "E-commerce",
    challenge: "Сложности с координацией между iOS, Android и backend командами",
    solution: "AI анализирует изменения API и автоматически генерирует уведомления о breaking changes",
    results: ["Время интеграции между командами сократилось в 3 раза", "Исчезли неожиданные поломки после обновлений API", "Документация всегда актуальна благодаря автогенерации"],
    metrics: {
      integrationTime: "-67%",
      apiBreaks: "-90%",
      docAccuracy: "+100%"
    }
  }, {
    icon: Globe,
    company: "SaaS платформа",
    industry: "B2B решения",
    challenge: "Команда из 25 разработчиков, медленные релизы, много техдолга",
    solution: "Комплексное внедрение AI на всех этапах SDLC с фокусом на рефакторинг",
    results: ["Техдолг сократился на 40% за полгода", "Частота релизов выросла с 1 раза в месяц до 2 раз в неделю", "Time to market новых фич ускорился в 4 раза"],
    metrics: {
      techDebt: "-40%",
      releaseFreq: "+800%",
      timeToMarket: "-75%"
    }
  }, {
    icon: ShoppingCart,
    company: "Интернет-магазин",
    industry: "Retail",
    challenge: "Высокая нагрузка в пиковые периоды, частые падения сервиса",
    solution: "AI мониторинг предсказывает проблемы и автоматически масштабирует ресурсы",
    results: ["Uptime вырос с 99.2% до 99.9%", "MTTR сократился с 45 минут до 8 минут", "Затраты на инфраструктуру снизились на 25%"],
    metrics: {
      uptime: "+0.7%",
      mttr: "-82%",
      infraCosts: "-25%"
    }
  }];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gradient-animated">
            Кейсы внедрения
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реальные результаты компаний, которые внедрили AI в свой процесс разработки
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{caseItem.company}</h3>
                    <p className="text-primary font-semibold">{caseItem.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-destructive">Проблема:</h4>
                    <p className="text-muted-foreground">{caseItem.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-primary">Решение:</h4>
                    <p className="text-muted-foreground">{caseItem.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-green-600">Результаты:</h4>
                    <ul className="space-y-2">
                      {caseItem.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    {Object.entries(caseItem.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-primary">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default CasesSection;