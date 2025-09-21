import { Card } from "@/components/ui/card";
import { Code, Shield, TestTube, Bug, Lightbulb, Cog } from "lucide-react";

const aiApplications = [
  {
    icon: Code,
    title: "Генерация тестов и шаблонного кода",
    description: "Автоматическое создание unit-тестов, интеграционных тестов и базовых шаблонов кода",
    color: "text-blue-500"
  },
  {
    icon: Shield,
    title: "Автоматический анализ PR",
    description: "Проверка безопасности, качества кода и соответствия стандартам в Pull Request",
    color: "text-green-500"
  },
  {
    icon: TestTube,
    title: "Оптимизация запуска тестов в CI",
    description: "Интеллектуальный выбор и приоритизация тестов для ускорения CI/CD процессов",
    color: "text-purple-500"
  },
  {
    icon: Bug,
    title: "Автоматизированный triage багов",
    description: "Классификация, приоритизация и направление багов соответствующим разработчикам",
    color: "text-red-500"
  },
  {
    icon: Lightbulb,
    title: "Подсказки по архитектуре",
    description: "Выявление антипаттернов и предложения по улучшению архитектурных решений",
    color: "text-orange-500"
  },
  {
    icon: Cog,
    title: "Root cause analysis",
    description: "Автоматический анализ причин инцидентов и предложения по их устранению",
    color: "text-indigo-500"
  }
];

const AIApplicationsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Сценарии <span className="text-gradient-animated">применения AI</span></h2>
        <p className="text-muted-foreground text-center mb-12 text-lg max-w-3xl mx-auto">
          Практические применения искусственного интеллекта на каждом этапе 
          жизненного цикла разработки программного обеспечения.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiApplications.map((application, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <application.icon className={`w-8 h-8 ${application.color}`} />
                <h3 className="text-xl font-semibold">{application.title}</h3>
              </div>
              <p className="text-muted-foreground">
                {application.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIApplicationsSection;