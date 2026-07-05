"use client";

import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappUrl("Hola, quisiera más información sobre sus productos.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-soft transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 fill-white">
        <path d="M16.04 3.2A12.67 12.67 0 0 0 5.23 22.48L3.6 28.8l6.47-1.58A12.67 12.67 0 1 0 16.04 3.2Zm0 2.34a10.33 10.33 0 1 1-5.26 19.22l-.38-.23-3.84.94.97-3.74-.25-.39A10.33 10.33 0 0 1 16.04 5.54Zm-5.1 5.55c-.23 0-.6.08-.92.43-.32.35-1.21 1.18-1.21 2.88s1.24 3.34 1.41 3.57c.17.23 2.4 3.84 5.92 5.23 2.93 1.16 3.53.93 4.17.87.64-.06 2.06-.84 2.35-1.65.29-.81.29-1.51.2-1.65-.09-.14-.32-.23-.67-.4-.35-.18-2.06-1.02-2.38-1.13-.32-.12-.55-.18-.78.17-.23.35-.9 1.13-1.1 1.36-.2.23-.41.26-.75.09-.35-.17-1.47-.54-2.8-1.72-1.03-.92-1.73-2.06-1.93-2.4-.2-.35-.02-.54.15-.71.16-.16.35-.41.52-.61.17-.2.23-.35.35-.58.12-.23.06-.43-.03-.61-.09-.17-.78-1.88-1.07-2.57-.28-.67-.57-.58-.78-.59h-.67Z" />
      </svg>
    </a>
  );
}
