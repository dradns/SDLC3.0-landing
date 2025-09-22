import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
const TestimonialsSection = () => {
  const testimonials = [{
    name: "Александр Петров",
    role: "Tech Lead",
    company: "CloudTech",
    avatar: "AP",
    rating: 5,
    text: "SDLC 3.0 кардинально изменил нашу работу. AI помогает на каждом этапе — от планирования до поддержки. Время релизов сократилось в 3 раза, а качество кода стало намного выше.",
    metrics: "Релизы: 3x быстрее"
  }, {
    name: "Мария Иванова",
    role: "Senior Developer",
    company: "StartupHub",
    avatar: "МИ",
    rating: 5,
    text: "Особенно впечатлил AI code review — находит проблемы, которые мы могли пропустить. Новички в команде быстрее входят в проект благодаря автоматической документации.",
    metrics: "Онбординг: -60% времени"
  }, {
    name: "Дмитрий Козлов",
    role: "DevOps Engineer",
    company: "BigData Corp",
    avatar: "ДК",
    rating: 5,
    text: "Автоматический анализ рисков перед релизом — это то, что мы так долго искали. AI предсказывает возможные проблемы и предлагает пути их решения.",
    metrics: "Incident rate: -75%"
  }, {
    name: "Елена Смирнова",
    role: "Product Manager",
    company: "TechFlow",
    avatar: "ЕС",
    rating: 5,
    text: "Теперь могу точно планировать релизы. AI дает прозрачные оценки времени разработки и помогает формулировать требования так, чтобы команда сразу понимала задачи.",
    metrics: "Точность планов: +85%"
  }, {
    name: "Андрей Волков",
    role: "CTO",
    company: "InnovateLab",
    avatar: "АВ",
    rating: 5,
    text: "ROI от внедрения SDLC 3.0 превзошел все ожидания. Команда стала работать эффективнее, продукт развивается быстрее, а техдолг больше не растет как снежный ком.",
    metrics: "ROI: 320% за год"
  }, {
    name: "Ольга Федорова",
    role: "QA Lead",
    company: "QualityFirst",
    avatar: "ОФ",
    rating: 5,
    text: "AI помогает не только находить баги, но и предотвращать их появление. Автогенерация тестов сэкономила нам месяцы работы, а покрытие выросло до 90%.",
    metrics: "Test coverage: 90%"
  }];

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Отзывы разработчиков
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мнения специалистов, которые уже используют AI в разработке
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <Quote className="h-6 w-6 text-muted-foreground mb-3" />
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="pt-4 border-t">
                <div className="text-sm font-medium text-primary">
                  {testimonial.metrics}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;