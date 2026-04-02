import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function TelegramCTA() {
  return (
    <section id="telegram" className="relative z-10 py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-transparent p-10 md:p-14 text-center backdrop-blur-sm">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Icon name="Send" size={28} className="text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-sentient mb-4">
            Готовы начать?
          </h2>
          <p className="text-foreground/50 font-mono text-sm mb-8 max-w-sm mx-auto">
            Первые 3 дня — бесплатно. Подключитесь прямо сейчас через Telegram-бота.
          </p>
          <a href="https://t.me/SuperVPN_bot" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              <Icon name="Send" size={16} />
              Открыть Telegram-бота
            </Button>
          </a>
          <p className="mt-6 text-xs text-foreground/30 font-mono">
            Без регистрации · Без карты · Без лишних шагов
          </p>
        </div>
      </div>
    </section>
  );
}
