"use client";

import { useState } from "react";
import type { Lang } from "../../lib/i18n";

const LANGS: { code: Lang; label: string }[] = [
  { code: "ca", label: "CA" },
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

export function LangSwitch({ current }: { current: Lang }) {
  const [hovered, setHovered] = useState<Lang | null>(null);

  function setLang(lang: Lang) {
    // Cookie persistente 1 año
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; samesite=lax`;
    // Reemplazar el primer segmento de la URL si existe, o ir a /[lang]
    const path = window.location.pathname;
    const m = path.match(/^\/(ca|es|en)(\/.*)?$/);
    const rest = m && m[2] ? m[2] : "";
    window.location.href = `/${lang}${rest}${window.location.search}${window.location.hash}`;
  }

  return (
    <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, overflow: "hidden", height: 28 }}>
      {LANGS.map((l) => {
        const active = l.code === current;
        const isHover = hovered === l.code;
        return (
          <button
            key={l.code}
            onClick={() => !active && setLang(l.code)}
            onMouseEnter={() => setHovered(l.code)}
            onMouseLeave={() => setHovered(null)}
            style={{
              padding: "0 8px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.05em",
              border: "none",
              background: active
                ? "rgba(255,255,255,0.10)"
                : isHover
                ? "rgba(255,255,255,0.05)"
                : "transparent",
              color: active ? "#F6F1EB" : "rgba(246,241,235,0.55)",
              cursor: active ? "default" : "pointer",
              fontFamily: "inherit",
            }}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
