"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/site.config";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap header-inner">
        <div className="brand">
          <Image
            src="/logo-light.png"
            alt={site.brand}
            width={110}
            height={98}
            priority
            style={{ height: 44, width: "auto" }}
          />
          <span className="brand-name">{site.brand} | من {site.program}</span>
        </div>
        <a className="btn btn-sm" href="#register">
          سجّل حضورك
        </a>
      </div>
    </header>
  );
}
