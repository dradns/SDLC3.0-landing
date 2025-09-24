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
  return;
};
export default TestimonialsSection;