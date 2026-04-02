import { VpnBackground } from "./VpnBackground";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { useState } from "react";
import { Header } from "./Header";

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <VpnBackground hovering={hovering} />
      <Header />

      <div className="pb-20 mt-auto text-center relative">
        <Pill className="mb-6">БЕЗОПАСНО • БЫСТРО • АНОНИМНО</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-hero leading-tight">
          Свобода в сети —<br />
          <span className="text-primary font-light">без границ</span>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[480px] mx-auto">
          Ogrizok VPN шифрует трафик, скрывает IP и помогает сохранять доступ к привычным сервисам
        </p>

        <a className="contents max-sm:hidden" href="#telegram">
          <Button
            className="mt-12"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Подключиться в Telegram
          </Button>
        </a>
        <a className="contents sm:hidden" href="#telegram">
          <Button
            size="sm"
            className="mt-12"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Подключиться в Telegram
          </Button>
        </a>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-10 font-mono text-xs text-foreground/40">
          <span>🔒 TLS 1.3 шифрование</span>
          <span>⚡ Низкая задержка</span>
          <span>📱 Прямо в Telegram</span>
        </div>
      </div>
    </div>
  );
}