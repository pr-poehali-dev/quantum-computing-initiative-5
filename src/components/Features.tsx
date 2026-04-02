import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "ShieldCheck",
    title: "Полная анонимность",
    desc: "Ваш IP скрыт, трафик зашифрован. Никто не узнает, где вы и что смотрите.",
  },
  {
    icon: "Zap",
    title: "Высокая скорость",
    desc: "Оптимизированные серверы в 50+ странах. Стриминг и загрузки без задержек.",
  },
  {
    icon: "Globe",
    title: "Без блокировок",
    desc: "Доступ к любым сайтам и сервисам — Instagram, YouTube, Netflix и другим.",
  },
  {
    icon: "Smartphone",
    title: "Прямо в Telegram",
    desc: "Не нужно устанавливать приложения. Один бот — и вы уже защищены.",
  },
  {
    icon: "Lock",
    title: "Шифрование AES-256",
    desc: "Военный стандарт защиты данных. Ваша переписка и платежи под надёжной защитой.",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    desc: "Ответим на любой вопрос в течение нескольких минут прямо в Telegram.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative z-10 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase text-primary/80 tracking-widest mb-4">Возможности</p>
          <h2 className="text-3xl md:text-4xl font-sentient">
            Всё что нужно для<br />
            <i className="font-light">безопасного интернета</i>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/40 hover:bg-white/8 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name={f.icon as "ShieldCheck"} size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-base">{f.title}</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
