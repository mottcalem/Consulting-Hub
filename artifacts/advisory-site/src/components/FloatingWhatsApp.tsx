import { SiWhatsapp } from "react-icons/si";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/905321234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp size={32} />
    </a>
  );
}
