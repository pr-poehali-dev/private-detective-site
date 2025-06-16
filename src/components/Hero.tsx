import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              Частный детектив
              <span className="block text-blue-400">Александр Петров</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              15 лет опыта в расследованиях. Полная конфиденциальность,
              профессиональный подход и гарантированный результат.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Связаться со мной
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-400 text-gray-300 hover:bg-slate-700 px-8 py-3"
              >
                <Icon name="FileText" className="w-5 h-5 mr-2" />
                Узнать об услугах
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex justify-center">
            <div className="bg-slate-700 rounded-lg p-8 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                  <Icon name="Shield" size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Конфиденциальность</h3>
                <p className="text-gray-300">
                  Гарантирую полную анонимность и защиту персональных данных
                  клиентов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
