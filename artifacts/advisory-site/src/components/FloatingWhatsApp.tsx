import { SiWhatsapp, SiYoutube } from "react-icons/si";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <a
        href="https://www.youtube.com/@HalukAlacaklioglu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full bg-[#FF0000] p-4 text-white shadow-2xl transition-transform hover:scale-110 hover:bg-[#d90000]"
        aria-label="Haluk Alacaklıoğlu YouTube kanalı"
        title="YouTube"
      >
        <SiYoutube size={32} />
      </a>
      <a
        href="https://wa.me/905321234567"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-2xl transition-transform hover:scale-110 hover:bg-[#20bd5a]"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <SiWhatsapp size={32} />
      </a>
    </div>
  );
}
