import { GL } from "./gl";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { useState } from "react";
import { Header } from "./Header";

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <GL hovering={hovering} />
      <Header />

      <div className="pb-20 mt-auto text-center relative">
        <Pill className="mb-6">БЕЗОПАСНО • БЫСТРО • АНОНИМНО</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient leading-tight">
          Свобода в сети —<br />
          <i className="font-light text-primary">без границ</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[480px] mx-auto">
          Super VPN защищает ваше соединение, скрывает IP-адрес и открывает доступ к любому контенту в мире
        </p>

        <a className="contents max-sm:hidden" href="#telegram">
          <Button
            className="mt-12"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Подключиться в Telegram]
          </Button>
        </a>
        <a className="contents sm:hidden" href="#telegram">
          <Button
            size="sm"
            className="mt-12"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Подключиться в Telegram]
          </Button>
        </a>

        <div className="flex justify-center gap-8 mt-10 font-mono text-xs text-foreground/40">
          <span>🔒 Шифрование AES-256</span>
          <span>⚡ До 1 Гбит/с</span>
          <span>🌍 50+ стран</span>
        </div>
      </div>
    </div>
  );
}
