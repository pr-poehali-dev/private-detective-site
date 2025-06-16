import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Условия сотрудничества
          </h1>
          <p className="text-xl text-gray-600">
            Прозрачные условия работы, тарифы и правовые аспекты
          </p>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Icon name="DollarSign" className="mr-3 text-blue-600" size={24} />
            Тарифы на услуги
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Наблюдение (за день)</span>
                <span className="text-blue-600 font-semibold">от 3 000 ₽</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Поиск людей</span>
                <span className="text-blue-600 font-semibold">от 15 000 ₽</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Проверка биографии</span>
                <span className="text-blue-600 font-semibold">от 8 000 ₽</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Корпоративные расследования</span>
                <span className="text-blue-600 font-semibold">от 25 000 ₽</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Расследование мошенничества</span>
                <span className="text-blue-600 font-semibold">от 20 000 ₽</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Семейные расследования</span>
                <span className="text-blue-600 font-semibold">от 5 000 ₽</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <Icon name="Info" className="inline mr-1" size={16} />
              Точная стоимость определяется после анализа конкретной ситуации.
              Первичная консультация — бесплатно.
            </p>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Icon name="CreditCard" className="mr-3 text-blue-600" size={24} />
            Условия оплаты
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Способы оплаты:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-600 mr-2"
                    size={16}
                  />
                  Наличный расчет
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-600 mr-2"
                    size={16}
                  />
                  Банковский перевод
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-600 mr-2"
                    size={16}
                  />
                  Электронные платежи
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-600 mr-2"
                    size={16}
                  />
                  Корпоративные счета
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Порядок расчетов:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-600 mr-2"
                    size={16}
                  />
                  Предоплата 50% от стоимости
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-600 mr-2"
                    size={16}
                  />
                  Доплата по результатам работы
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-600 mr-2"
                    size={16}
                  />
                  Возможна рассрочка (по согласованию)
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-600 mr-2"
                    size={16}
                  />
                  Полный отчет по расходам
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Client Responsibilities */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Icon name="Users" className="mr-3 text-blue-600" size={24} />
            Обязанности клиента
          </h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <Icon
                name="Check"
                className="text-green-600 mr-3 mt-1 flex-shrink-0"
                size={16}
              />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Предоставление достоверной информации
                </h4>
                <p className="text-gray-600 text-sm">
                  Сообщение всех известных фактов, имеющих отношение к делу
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Icon
                name="Check"
                className="text-green-600 mr-3 mt-1 flex-shrink-0"
                size={16}
              />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Соблюдение условий договора
                </h4>
                <p className="text-gray-600 text-sm">
                  Выполнение всех пунктов соглашения об оказании услуг
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Icon
                name="Check"
                className="text-green-600 mr-3 mt-1 flex-shrink-0"
                size={16}
              />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Своевременная оплата услуг
                </h4>
                <p className="text-gray-600 text-sm">
                  Внесение платежей согласно условиям договора
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Icon
                name="Check"
                className="text-green-600 mr-3 mt-1 flex-shrink-0"
                size={16}
              />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Конфиденциальность процесса
                </h4>
                <p className="text-gray-600 text-sm">
                  Неразглашение информации о ходе расследования третьим лицам
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Limitations */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Icon
              name="AlertTriangle"
              className="mr-3 text-orange-600"
              size={24}
            />
            Ограничения деятельности
          </h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <Icon
                name="X"
                className="text-red-600 mr-3 mt-1 flex-shrink-0"
                size={16}
              />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Не осуществляю:
                </h4>
                <ul className="text-gray-600 text-sm mt-1 space-y-1">
                  <li>• Деятельность, запрещенную законодательством РФ</li>
                  <li>
                    • Вмешательство в частную жизнь без законных оснований
                  </li>
                  <li>• Сбор информации, составляющей государственную тайну</li>
                  <li>• Проведение оперативно-розыскных мероприятий</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <Icon
                name="Shield"
                className="text-blue-600 mr-3 mt-1 flex-shrink-0"
                size={16}
              />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Работаю только в рамках закона:
                </h4>
                <p className="text-gray-600 text-sm">
                  Все действия соответствуют требованиям ФЗ "О частной
                  детективной и охранной деятельности в РФ"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="bg-slate-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Icon name="Scale" className="mr-3 text-blue-400" size={24} />
            Правовые аспекты
          </h2>

          <div className="space-y-4 text-sm">
            <p className="text-gray-300">
              <strong>Лицензия:</strong> Деятельность осуществляется на
              основании лицензии на право оказания услуг в области частной
              детективной деятельности № 123456, выданной МВД России.
            </p>

            <p className="text-gray-300">
              <strong>Конфиденциальность:</strong> Гарантируется соблюдение
              профессиональной тайны. Информация о клиентах и результатах работы
              не разглашается третьим лицам.
            </p>

            <p className="text-gray-300">
              <strong>Ответственность:</strong> Несу полную ответственность за
              качество оказываемых услуг в рамках действующего законодательства
              РФ.
            </p>

            <p className="text-gray-300">
              <strong>Споры:</strong> Все спорные вопросы решаются путем
              переговоров, а при невозможности достижения соглашения — в
              судебном порядке.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              Документ обновлен: декабрь 2024 г. | Частный детектив Александр
              Петров
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
