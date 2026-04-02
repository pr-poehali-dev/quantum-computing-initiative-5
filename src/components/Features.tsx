import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "ShieldCheck",
    title: "Конфиденциальность и защита",
    desc: "Шифруем трафик и скрываем IP. Защищаем соединение в публичных сетях и от базового перехвата.",
  },
  {
    icon: "Zap",
    title: "Высокая скорость",
    desc: "Оптимизированные маршруты и низкая задержка для видео, звонков и загрузок.",
  },
  {
    icon: "Globe",
    title: "Стабильный доступ",
    desc: "Помогаем сохранять доступ к привычным сервисам даже в нестабильных сетях.",
  },
  {
    icon: "Smartphone",
    title: "Прямо в Telegram",
    desc: "Подключение и поддержка в одном боте: без сложной настройки и лишних приложений.",
  },
  {
    icon: "Lock",
    title: "Современное шифрование TLS 1.3",
    desc: "Используем защищённый туннель на современных криптопротоколах для стабильной и безопасной передачи данных.",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    desc: "Оперативно помогаем с подключением, оплатой и настройкой прямо в Telegram.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative z-10 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase text-primary/80 tracking-widest mb-4">Возможности</p>
          <h2 className="text-3xl md:text-4xl font-hero font-semibold">
            Всё что нужно для<br />
            <span className="font-light text-primary">безопасного интернета</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors shrink-0">
                <Icon name={f.icon as "ShieldCheck"} size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-base leading-snug">{f.title}</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Блок технологии */}
        <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
              <Icon name="Cpu" size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-base mb-1">Как это работает</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                <span className="text-primary/80 font-mono">Xray + VLESS + TLS/REALITY</span> — современный VPN-стек, ориентированный на скорость, устойчивость и удобное подключение.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
