import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo className="w-[130px] opacity-70" />
        <p className="font-mono text-xs text-foreground/30 text-center">
          © 2024 Super VPN · Все права защищены
        </p>
        <div className="flex gap-6 font-mono text-xs text-foreground/40">
          <a href="#features" className="hover:text-foreground/80 transition-colors">Возможности</a>
          <a href="#how" className="hover:text-foreground/80 transition-colors">Как работает</a>
          <a href="#telegram" className="hover:text-foreground/80 transition-colors">Подключиться</a>
        </div>
      </div>
    </footer>
  );
}
