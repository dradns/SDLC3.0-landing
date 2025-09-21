import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Как быстро можно внедрить SDLC 3.0?",
      answer: "Время внедрения зависит от размера команды и текущего уровня автоматизации. Минимальный эффект появляется через 2-4 недели, полноценные результаты — через 2-3 месяца. Главное — начать с документирования процессов и настройки CI/CD."
    },
    {
      question: "Нужно ли менять весь технологический стек?",
      answer: "Нет, SDLC 3.0 работает с любым стеком. AI интегрируется через API и webhook'и, не требуя изменения архитектуры. Можно начать с одного проекта или команды и постепенно масштабировать."
    },
    {
      question: "Какие навыки нужны команде для работы с AI?",
      answer: "Специальные навыки по машинному обучению не нужны. Достаточно базового понимания CI/CD и готовности документировать процессы. AI-помощник сам обучается на данных вашего проекта."
    },
    {
      question: "Как AI обеспечивает безопасность кода?",
      answer: "AI анализирует код на предмет уязвимостей, проверяет compliance с security стандартами, отслеживает подозрительные изменения. Все данные обрабатываются локально или в приватном облаке компании."
    },
    {
      question: "Что если AI даст неправильную рекомендацию?",
      answer: "AI предлагает рекомендации с указанием уровня уверенности. Критические решения всегда остаются за человеком. Система учится на обратной связи и постоянно улучшается."
    },
    {
      question: "Сколько стоит внедрение SDLC 3.0?",
      answer: "Стоимость зависит от размера команды и уровня интеграции. ROI обычно окупается за 6-12 месяцев за счет ускорения разработки и снижения количества инцидентов."
    },
    {
      question: "Можно ли использовать с legacy кодом?",
      answer: "Да, AI особенно эффективен с legacy системами. Он помогает понять архитектуру, находит технический долг, предлагает план рефакторинга и генерирует недостающую документацию."
    },
    {
      question: "Как измерить эффективность внедрения?",
      answer: "Отслеживайте 4 ключевые метрики: Lead Time (время от кода до продакшена), частоту релизов, процент успешных деплоев и MTTR. Улучшение этих показателей — прямой результат SDLC 3.0."
    },
    {
      question: "Подходит ли для небольших команд?",
      answer: "Да, даже команды из 2-3 разработчиков получают пользу. AI помогает автоматизировать рутину, которую сложно делегировать в маленькой команде: тесты, документацию, мониторинг."
    },
    {
      question: "Что делать, если команда сопротивляется изменениям?",
      answer: "Начните с демонстрации конкретных выгод: покажите, как AI ускоряет code review или находит баги. Внедряйте постепенно, начиная с процессов, которые команда хочет улучшить в первую очередь."
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Часто задаваемые <span className="text-gradient-animated">вопросы</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ответы на популярные вопросы о внедрении и использовании SDLC 3.0
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-gradient-card border-card-border shadow-custom-md hover:shadow-custom-lg transition-all duration-300">
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-4 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
              >
                  <div className="flex items-center justify-between">
                  <div className="flex items-start gap-2 sm:gap-3 flex-1">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <h3 className="font-semibold text-sm sm:text-base text-foreground pr-2 sm:pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="pl-4 sm:pl-8 border-l-2 border-primary/20">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Contact info */}
        <Card className="mt-12 p-4 sm:p-8 bg-primary/5 border-primary/20 shadow-custom-lg text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-primary">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              SDLC 3.0 — это комплексный подход, который требует индивидуальной настройки под каждую команду. 
              Эффект от внедрения появляется не сразу, но результаты стоят усилий: команды работают эффективнее, 
              продукты выходят быстрее, а разработчики фокусируются на креативных задачах вместо рутины.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FAQSection;