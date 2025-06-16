import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Eye",
    title: "Наблюдение",
    description: "Скрытое наблюдение за объектами с фото и видео фиксацией",
  },
  {
    icon: "Search",
    title: "Розыск людей",
    description: "Поиск пропавших без вести, должников, родственников",
  },
  {
    icon: "FileSearch",
    title: "Проверка биографии",
    description: "Детальная проверка прошлого потенциальных партнеров",
  },
  {
    icon: "Building",
    title: "Корпоративные расследования",
    description:
      "Выявление мошенничества, кражи информации, недобросовестности",
  },
  {
    icon: "AlertTriangle",
    title: "Расследование мошенничества",
    description: "Сбор доказательств финансовых и других видов обмана",
  },
  {
    icon: "Heart",
    title: "Семейные вопросы",
    description: "Расследования по семейным и брачным спорам",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Спектр услуг
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональные детективные услуги с гарантией конфиденциальности и
            результата
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Icon name={service.icon} className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
