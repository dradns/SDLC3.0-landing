import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Александр Петров",
      role: "Tech Lead",
      company: "CloudTech",
      avatar: "AP",
      rating: 5,
      text: "SDLC 3.0 кардинально изменил нашу работу. AI помогает на каждом этапе — от планирования до поддержки. Время релизов сократилось в 3 раза, а качество кода стало намного выше.",
      metrics: "Релизы: 3x быстрее"
    },
    {
      name: "Мария Иванова",
      role: "Senior Developer",
      company: "StartupHub",
      avatar: "МИ",
      rating: 5,
      text: "Особенно впечатлил AI code review — находит проблемы, которые мы могли пропустить. Новички в команде быстрее входят в проект благодаря автоматической документации.",
      metrics: "Онбординг: -60% времени"
    },
    {
      name: "Дмитрий Козлов",
      role: "DevOps Engineer",
      company: "BigData Corp",
      avatar: "ДК",
      rating: 5,
      text: "Автоматический анализ рисков перед релизом — это то, что мы так долго искали. AI предсказывает возможные проблемы и предлагает пути их решения.",
      metrics: "Incident rate: -75%"
    },
    {
      name: "Елена Смирнова",
      role: "Product Manager",
      company: "TechFlow",
      avatar: "ЕС",
      rating: 5,
      text: "Теперь могу точно планировать релизы. AI дает прозрачные оценки времени разработки и помогает формулировать требования так, чтобы команда сразу понимала задачи.",
      metrics: "Точность планов: +85%"
    },
    {
      name: "Андрей Волков",
      role: "CTO",
      company: "InnovateLab",
      avatar: "АВ",
      rating: 5,
      text: "ROI от внедрения SDLC 3.0 превзошел все ожидания. Команда стала работать эффективнее, продукт развивается быстрее, а техдолг больше не растет как снежный ком.",
      metrics: "ROI: 320% за год"
    },
    {
      name: "Ольга Федорова",
      role: "QA Lead",
      company: "QualityFirst",
      avatar: "ОФ",
      rating: 5,
      text: "AI помогает не только находить баги, но и предотвращать их появление. Автогенерация тестов сэкономила нам месяцы работы, а покрытие выросло до 90%.",
      metrics: "Test coverage: 90%"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Что говорят <span className="text-gradient-animated">эксперты</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Отзывы специалистов, которые уже используют SDLC 3.0 в своих командах
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-4 sm:p-6 bg-gradient-card border-card-border shadow-custom-md hover:shadow-custom-lg transition-all duration-300 group relative h-full flex flex-col">
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{testimonial.name}</h3>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                "{testimonial.text}"
              </p>

              {/* Metrics */}
              <div className="border-t border-card-border pt-3 flex items-center">
                <div className="bg-success/10 text-success text-xs font-medium px-3 py-1 rounded-full">
                  {testimonial.metrics}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom stat */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="inline-block p-4 sm:p-6 bg-primary/5 border-primary/20 shadow-custom-lg">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">94%</div>
                <div className="text-xs text-muted-foreground">рекомендуют</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.8/5</div>
                <div className="text-xs text-muted-foreground">средняя оценка</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground">команд используют</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;