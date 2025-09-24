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
  return;
};
export default CasesSection;