import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Eye",
    title: "Наблюдение и слежка",
    description:
      "Профессиональное скрытое наблюдение за объектами с детальной фиксацией активности.",
    details: [
      "Скрытое наблюдение за физическими лицами",
      "Фото и видео фиксация",
      "Детальные отчеты о деятельности",
      "Соблюдение законодательных норм",
    ],
    price: "от 3000 руб/день",
  },
  {
    icon: "Search",
    title: "Розыск людей",
    description:
      "Поиск пропавших без вести, должников, утерянных родственников и знакомых.",
    details: [
      "Поиск пропавших без вести",
      "Розыск должников",
      "Поиск родственников",
      "Установление местонахождения",
    ],
    price: "от 15000 руб",
  },
  {
    icon: "FileSearch",
    title: "Проверка биографии",
    description:
      "Тщательная проверка прошлого и настоящего потенциальных партнеров.",
    details: [
      "Проверка трудовой деятельности",
      "Выявление судимостей",
      "Проверка финансового состояния",
      "Анализ социальных связей",
    ],
    price: "от 8000 руб",
  },
  {
    icon: "Building",
    title: "Корпоративные расследования",
    description:
      "Выявление внутренних угроз, мошенничества и защита коммерческих интересов.",
    details: [
      "Расследование краж на предприятии",
      "Выявление недобросовестных сотрудников",
      "Проверка благонадежности персонала",
      "Защита коммерческой тайны",
    ],
    price: "от 25000 руб",
  },
  {
    icon: "AlertTriangle",
    title: "Расследование мошенничества",
    description:
      "Сбор доказательств финансовых и других видов мошеннических действий.",
    details: [
      "Финансовое мошенничество",
      "Интернет-мошенничество",
      "Страховое мошенничество",
      "Сбор доказательной базы",
    ],
    price: "от 20000 руб",
  },
  {
    icon: "Heart",
    title: "Семейные расследования",
    description:
      "Деликатное решение семейных споров с соблюдением конфиденциальности.",
    details: [
      "Супружеские измены",
      "Спор о детях",
      "Алименты и имущество",
      "Семейные конфликты",
    ],
    price: "от 5000 руб",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Детективные услуги
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональные расследования с гарантией конфиденциальности и
            результата. Все услуги оказываются в рамках действующего
            законодательства РФ.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={service.icon} className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Включает:</h4>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Icon
                        name="Check"
                        className="text-green-600 mr-2 flex-shrink-0"
                        size={16}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-2xl font-bold text-blue-600">
                  {service.price}
                </span>
                <span className="text-sm text-gray-500">
                  Стоимость зависит от сложности
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-gray-300 mb-6">
            Обсудим ваш случай и подберем оптимальное решение. Первичная
            консультация бесплатно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center">
              <Icon name="Phone" className="mr-2" size={20} />
              <span className="text-lg font-semibold">+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center">
              <Icon name="Mail" className="mr-2" size={20} />
              <span>detective@petrov.ru</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
