import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Нужна консультация?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Обратитесь ко мне для конфиденциальной консультации. Первичная
          консультация по телефону — бесплатно.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Icon name="Phone" size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (999) 123-45-67</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Icon name="Mail" size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-300">detective@petrov.ru</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Icon name="Clock" size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
              <p className="text-gray-300">24 часа / 7 дней</p>
            </div>
          </div>
        </div>

        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
          <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
          Связаться сейчас
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
