import { Card } from "@/components/ui/card";
import { Database, GitBranch, TestTube, FileText, CheckCircle } from "lucide-react";

const RequirementsSection = () => {
  const requirements = [
    {
      icon: GitBranch,
      title: "Стандартизированные пайплайны CI/CD",
      description: "Унифицированные процессы автоматической сборки, тестирования и развертывания",
      status: "critical"
    },
    {
      icon: FileText,
      title: "Единый репозиторий документации",
      description: "ADR, style guides, спецификации в едином месте для эффективной работы AI",
      status: "critical"
    },
    {
      icon: TestTube,
      title: "Автоматизированные тесты",
      description: "Unit, integration и e2e тесты для обеспечения качества и надежности процессов",
      status: "important"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Требования к <span className="text-gradient">внедрению</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Базовые требования для успешного внедрения SDLC 3.0 и достижения максимальной эффективности AI-инструментов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {requirements.map((req, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-card-border shadow-custom-md hover:shadow-custom-lg transition-all duration-300 group">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <req.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-semibold flex-1">{req.title}</h3>
                  {req.status === 'critical' && (
                    <span className="bg-destructive/10 text-destructive text-xs px-2 py-1 rounded-full font-medium">
                      Критично
                    </span>
                  )}
                  {req.status === 'important' && (
                    <span className="bg-warning/10 text-warning text-xs px-2 py-1 rounded-full font-medium">
                      Важно
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">{req.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Key insight */}
        <Card className="p-8 bg-primary/5 border-primary/20 shadow-custom-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Ограничения и риски</h3>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>При отсутствии документации эффект AI снижается.</strong> Первые недели внедрения возможно падение скорости из-за настройки процессов. 
                Эффективность выше в проектах с унифицированными пайплайнами и структурированными данными.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RequirementsSection;