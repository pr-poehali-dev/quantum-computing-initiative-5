const steps = [
  {
    num: "01",
    title: "Найдите бота",
    desc: 'Перейдите в Telegram и найдите @SuperVPN_bot или нажмите кнопку ниже.',
  },
  {
    num: "02",
    title: "Выберите тариф",
    desc: "Бесплатный пробный период или подписка. Оплата в пару кликов.",
  },
  {
    num: "03",
    title: "Получите конфиг",
    desc: "Бот автоматически выдаст конфигурацию. Один тап — и вы защищены.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative z-10 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase text-primary/80 tracking-widest mb-4">Как это работает</p>
          <h2 className="text-3xl md:text-4xl font-sentient">
            Подключение за<br />
            <i className="font-light">3 простых шага</i>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((step) => (
            <div key={step.num} className="text-center relative">
              <div className="w-16 h-16 rounded-full border-2 border-primary/40 bg-primary/10 flex items-center justify-center mx-auto mb-5 relative z-10">
                <span className="font-mono text-primary text-lg font-bold">{step.num}</span>
              </div>
              <h3 className="font-semibold text-white text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-foreground/50 leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
