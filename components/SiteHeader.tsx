"use client";

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
          <span className="brand-name" style={{ paddingRight:"14px"}}>
            {site.brand} | من {site.program}
          </span>
        </div>
        <div className="actions" style={{ paddingLeft:"14px"}}>
          <a className="btn btn-sm" href="#register">
            سجّل حضورك
          </a>
        </div>
      </div>
    </header>
  );
}
