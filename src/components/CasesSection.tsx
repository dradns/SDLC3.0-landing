import { Card } from "@/components/ui/card";
import { Building2, Smartphone, Globe, ShoppingCart } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      icon: Building2,
      company: "FinTech стартап",
      industry: "Финансовые технологии",
      challenge: "Команда из 8 разработчиков не успевала выпускать фичи для быстрорастущего продукта",
      solution: "Внедрили AI-помощника для code review и автогенерации тестов",
      results: [
        "Время релиза сократилось с 2 недель до 4 дней",
        "Покрытие тестами выросло с 45% до 85%",
        "Количество продакшн багов снизилось на 60%"
      ],
      metrics: {
        leadTime: "-75%",
        bugReduction: "-60%",
        testCoverage: "+89%"
      }
    },
    {
      icon: Smartphone,
      company: "Мобильное приложение",
      industry: "E-commerce",
      challenge: "Сложности с координацией между iOS, Android и backend командами",
      solution: "AI анализирует изменения API и автоматически генерирует уведомления о breaking changes",
      results: [
        "Время интеграции между командами сократилось в 3 раза",
        "Исчезли неожиданные поломки после обновлений API",
        "Документация всегда актуальна благодаря автогенерации"
      ],
      metrics: {
        integrationTime: "-67%",
        apiBreaks: "-90%",
        docAccuracy: "+100%"
      }
    },
    {
      icon: Globe,
      company: "SaaS платформа",
      industry: "B2B решения",
      challenge: "Команда из 25 разработчиков, медленные релизы, много техдолга",
      solution: "Комплексное внедрение AI на всех этапах SDLC с фокусом на рефакторинг",
      results: [
        "Техдолг сократился на 40% за полгода",
        "Частота релизов выросла с 1 раза в месяц до 2 раз в неделю",
        "Time to market новых фич ускорился в 4 раза"
      ],
      metrics: {
        techDebt: "-40%",
        releaseFreq: "+800%",
        timeToMarket: "-75%"
      }
    },
    {
      icon: ShoppingCart,
      company: "Интернет-магазин",
      industry: "Retail",
      challenge: "Высокая нагрузка в пиковые периоды, частые падения сервиса",
      solution: "AI мониторинг предсказывает проблемы и автоматически масштабирует ресурсы",
      results: [
        "Uptime вырос с 99.2% до 99.9%",
        "MTTR сократился с 45 минут до 8 минут",
        "Затраты на инфраструктуру снизились на 25%"
      ],
      metrics: {
        uptime: "+0.7%",
        mttr: "-82%",
        infraCosts: "-25%"
      }
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Реальные <span className="text-gradient-animated">кейсы</span> внедрения
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Как команды разного размера и из разных индустрий получили результат от SDLC 3.0
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="p-4 sm:p-6 lg:p-8 bg-gradient-card border-card-border shadow-custom-md hover:shadow-custom-lg transition-all duration-300 group">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <caseStudy.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{caseStudy.company}</h3>
                    <p className="text-sm text-muted-foreground">{caseStudy.industry}</p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="font-medium text-destructive mb-2">Проблема:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h4 className="font-medium text-primary mb-2">Решение:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-medium text-success mb-3">Результаты:</h4>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key metrics */}
                <div className="border-t border-card-border pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                    {Object.entries(caseStudy.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center p-2 sm:p-0">
                        <div className={`text-base sm:text-lg font-bold ${
                          value.startsWith('+') ? 'text-success' : 'text-primary'
                        }`}>
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;