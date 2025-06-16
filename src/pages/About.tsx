import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            О частном детективе
          </h1>
          <p className="text-xl text-gray-600">
            Александр Петров — опытный частный детектив с безупречной репутацией
          </p>
        </div>

        {/* Profile */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-48 h-48 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="User" size={80} className="text-slate-400" />
              </div>
              <p className="text-sm text-gray-500">Фото детектива</p>
            </div>

            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">
                Александр Петров
              </h2>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Award" className="text-blue-600 mr-3" size={20} />
                  <span>15 лет опыта в детективной деятельности</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Shield"
                    className="text-blue-600 mr-3"
                    size={20}
                  />
                  <span>Лицензия частного детектива № 123456</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="GraduationCap"
                    className="text-blue-600 mr-3"
                    size={20}
                  />
                  <span>Высшее юридическое образование</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" className="text-blue-600 mr-3" size={20} />
                  <span>Более 500 успешно закрытых дел</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Профессиональный опыт
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-slate-900">2010-2024</h4>
                <p className="text-blue-600 font-medium">Частный детектив</p>
                <p className="text-gray-600 text-sm">
                  Собственная детективная практика. Специализация на семейных и
                  корпоративных расследованиях.
                </p>
              </div>

              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-semibold text-slate-900">2005-2010</h4>
                <p className="text-gray-700 font-medium">Следователь МВД</p>
                <p className="text-gray-600 text-sm">
                  Работа в следственном отделе. Расследование преступлений
                  против личности и собственности.
                </p>
              </div>

              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-semibold text-slate-900">2003-2005</h4>
                <p className="text-gray-700 font-medium">
                  Участковый инспектор
                </p>
                <p className="text-gray-600 text-sm">
                  Профилактическая работа, взаимодействие с населением,
                  первичное расследование правонарушений.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Образование и квалификация
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  Московский государственный юридический университет
                </h4>
                <p className="text-blue-600">Юриспруденция, 2003 год</p>
                <p className="text-gray-600 text-sm">
                  Специальность: уголовное право и криминалистика
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  Дополнительное образование
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Курсы повышения квалификации по криминалистике</li>
                  <li>• Специализация по психологии допроса</li>
                  <li>• Курсы по работе с техническими средствами</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  Членство в организациях
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Российская ассоциация частных детективов</li>
                  <li>• Союз частных детективов России</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Принципы работы
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Lock" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Конфиденциальность
              </h4>
              <p className="text-gray-600 text-sm">
                Абсолютная тайна клиента — основа моей профессиональной
                деятельности
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Scale" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Законность</h4>
              <p className="text-gray-600 text-sm">
                Все действия строго в рамках действующего законодательства РФ
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Target" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Результативность
              </h4>
              <p className="text-gray-600 text-sm">
                Нацеленность на достижение конкретного результата для клиента
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-slate-900 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Отзывы клиентов
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                "Александр помог найти пропавшего брата за неделю.
                Профессиональный подход, деликатность и результат превзошли все
                ожидания."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Мария К.</p>
                  <p className="text-sm text-gray-400">Поиск родственника</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                "Благодарен за расследование корпоративного мошенничества.
                Собранные доказательства помогли в судебном процессе."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Игорь П.</p>
                  <p className="text-sm text-gray-400">Бизнес-расследование</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
