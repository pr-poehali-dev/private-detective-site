import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const workSteps = [
  {
    number: "01",
    title: "Первичная консультация",
    description:
      "Обсуждение вашей ситуации в строго конфиденциальной обстановке",
    details: [
      "Бесплатная консультация по телефону",
      "Анализ ситуации и возможных решений",
      "Оценка перспектив расследования",
      "Предварительная оценка стоимости",
    ],
    icon: "MessageCircle",
  },
  {
    number: "02",
    title: "Заключение договора",
    description:
      "Оформление всех необходимых документов с гарантией конфиденциальности",
    details: [
      "Подписание договора об оказании услуг",
      "Соглашение о неразглашении информации",
      "Определение точных сроков выполнения",
      "Согласование стоимости и порядка оплаты",
    ],
    icon: "FileText",
  },
  {
    number: "03",
    title: "Планирование расследования",
    description: "Разработка детального плана действий с учетом специфики дела",
    details: [
      "Анализ имеющейся информации",
      "Составление плана расследования",
      "Подбор необходимых методов и средств",
      "Определение этапов и промежуточных целей",
    ],
    icon: "Map",
  },
  {
    number: "04",
    title: "Проведение расследования",
    description:
      "Активная фаза работы с использованием профессиональных методов",
    details: [
      "Сбор информации и доказательств",
      "Наблюдение и документирование",
      "Работа с базами данных и архивами",
      "Регулярное информирование о ходе дела",
    ],
    icon: "Search",
  },
  {
    number: "05",
    title: "Анализ и систематизация",
    description: "Обработка полученной информации и подготовка материалов дела",
    details: [
      "Анализ собранных фактов и доказательств",
      "Систематизация материалов дела",
      "Проверка достоверности информации",
      "Подготовка промежуточных отчетов",
    ],
    icon: "BarChart",
  },
  {
    number: "06",
    title: "Предоставление результатов",
    description: "Передача клиенту полного отчета с рекомендациями",
    details: [
      "Детальный письменный отчет",
      "Фото и видео материалы (при наличии)",
      "Рекомендации по дальнейшим действиям",
      "Консультации по использованию результатов",
    ],
    icon: "CheckCircle",
  },
];

const WorkProcess = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Порядок работы
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачный процесс сотрудничества с гарантией конфиденциальности на
            каждом этапе. Профессиональный подход от первого звонка до получения
            результата.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {workSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Step Number and Icon */}
                <div className="lg:col-span-3 bg-slate-900 text-white p-8 flex flex-col items-center justify-center">
                  <div className="text-6xl font-bold text-blue-400 mb-4">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon name={step.icon} size={24} className="text-white" />
                  </div>
                </div>

                {/* Step Content */}
                <div className="lg:col-span-9 p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {step.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start">
                        <Icon
                          name="Check"
                          className="text-green-600 mr-2 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality Notice */}
        <div className="mt-16 bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
          <div className="flex items-start">
            <Icon
              name="Shield"
              className="text-blue-600 mr-4 mt-1 flex-shrink-0"
              size={24}
            />
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Гарантия конфиденциальности
              </h3>
              <p className="text-gray-700 leading-relaxed">
                На каждом этапе работы обеспечивается полная конфиденциальность.
                Все материалы дела защищены профессиональной тайной. Информация
                о клиенте и деталях расследования не передается третьим лицам ни
                при каких обстоятельствах, за исключением случаев,
                предусмотренных законом.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-slate-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Свяжитесь со мной для первичной консультации. Обсудим вашу ситуацию
            и определим оптимальный план действий.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center">
              <Icon name="Phone" className="mr-2" size={20} />
              <span className="text-lg font-semibold">+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center">
              <Icon name="Mail" className="mr-2" size={20} />
              <span>detective@petrov.ru</span>
            </div>
            <div className="flex items-center">
              <Icon name="Clock" className="mr-2" size={20} />
              <span>24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
