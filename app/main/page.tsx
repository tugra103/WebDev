"use client";
import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";

const lightStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600&display=swap');

  .light-nav {
    padding: 20px 24px;
    background: linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #f0f9ff 100%);
    min-height: 80px;
    display: flex;
    align-items: center;
  }

  .light-nav .p-menubar {
    width: 100%;
    background: rgba(255,255,255,0.85) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(139,92,246,0.12) !important;
    border-radius: 18px !important;
    padding: 6px 18px !important;
    box-shadow:
      0 1px 0 rgba(255,255,255,0.9) inset,
      0 8px 32px rgba(109,40,217,0.08),
      0 2px 8px rgba(0,0,0,0.06) !important;
    transition: box-shadow 0.3s ease;
  }

  .light-nav .p-menubar:hover {
    box-shadow:
      0 1px 0 rgba(255,255,255,0.9) inset,
      0 12px 40px rgba(109,40,217,0.13),
      0 2px 8px rgba(0,0,0,0.07) !important;
  }

  .light-nav .p-menubar-start img {
    height: 30px;
    object-fit: contain;
  }

  .light-nav .p-menubar-root-list {
    gap: 2px !important;
    align-items: center;
  }

  .light-nav .p-menubar .p-menuitem > .p-menuitem-content > .p-menuitem-link,
  .light-nav .p-menubar .p-menuitem-link {
    font-family: 'Syne', sans-serif !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    letter-spacing: 0.5px !important;
    text-transform: uppercase !important;
    color: #6b7280 !important;
    background: transparent !important;
    border-radius: 10px !important;
    padding: 9px 14px !important;
    transition: color 0.22s ease, background 0.22s ease !important;
    gap: 8px !important;
  }

  .light-nav .p-menubar .p-menuitem:hover > .p-menuitem-content > .p-menuitem-link,
  .light-nav .p-menubar .p-menuitem-link:hover {
    color: #7c3aed !important;
    background: rgba(139,92,246,0.07) !important;
  }

  .light-nav .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-content > .p-menuitem-link {
    color: #7c3aed !important;
    background: rgba(139,92,246,0.09) !important;
  }

  .light-nav .p-menuitem-icon {
    color: #a78bfa !important;
    font-size: 13px !important;
    transition: color 0.22s, transform 0.22s !important;
  }
  .light-nav .p-menuitem:hover .p-menuitem-icon {
    color: #7c3aed !important;
    transform: scale(1.15) !important;
  }

  .light-nav .p-submenu-icon {
    color: #c4b5fd !important;
    margin-left: 4px !important;
    transition: transform 0.22s ease !important;
  }
  .light-nav .p-menuitem.p-menuitem-active .p-submenu-icon {
    transform: rotate(180deg) !important;
    color: #7c3aed !important;
  }

  .light-nav .p-submenu-list {
    background: rgba(255,255,255,0.97) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(139,92,246,0.15) !important;
    border-radius: 16px !important;
    box-shadow:
      0 1px 0 rgba(255,255,255,0.9) inset,
      0 20px 60px rgba(109,40,217,0.12),
      0 4px 16px rgba(0,0,0,0.08) !important;
    padding: 8px !important;
    min-width: 200px !important;
    margin-top: 8px !important;
  }

  .light-nav .p-submenu-list .p-menuitem-link {
    text-transform: none !important;
    letter-spacing: 0.1px !important;
    font-size: 13px !important;
    color: #6b7280 !important;
    border-radius: 10px !important;
    padding: 10px 14px !important;
  }

  .light-nav .p-submenu-list .p-menuitem:hover .p-menuitem-link {
    background: rgba(139,92,246,0.07) !important;
    color: #7c3aed !important;
  }

  .light-nav .p-menuitem-separator {
    border: none !important;
    border-top: 1px solid rgba(139,92,246,0.12) !important;
    margin: 6px 10px !important;
  }

  .light-nav .p-badge {
    background: linear-gradient(135deg, #7c3aed, #6d28d9) !important;
    color: #fff !important;
    font-family: 'Syne', sans-serif !important;
    font-size: 10px !important;
    font-weight: 600 !important;
    min-width: 18px !important;
    height: 18px !important;
    border-radius: 9px !important;
    box-shadow: 0 2px 8px rgba(109,40,217,0.35) !important;
  }

  .light-nav .shortcut-pill {
    background: rgba(139,92,246,0.08) !important;
    border: 1px solid rgba(139,92,246,0.2) !important;
    color: #7c3aed !important;
    font-family: 'Syne', sans-serif !important;
    font-size: 10px !important;
    padding: 2px 7px !important;
    border-radius: 6px !important;
  }

  .light-nav .luxury-search .p-inputtext {
    background: rgba(245,243,255,0.8) !important;
    border: 1px solid rgba(139,92,246,0.18) !important;
    border-radius: 12px !important;
    color: #4c1d95 !important;
    font-family: 'Syne', sans-serif !important;
    font-size: 13px !important;
    padding: 8px 14px !important;
    transition: all 0.25s !important;
    width: 155px !important;
  }

  .light-nav .luxury-search .p-inputtext::placeholder {
    color: #c4b5fd !important;
  }

  .light-nav .luxury-search .p-inputtext:focus {
    outline: none !important;
    border-color: #a78bfa !important;
    background: rgba(245,243,255,1) !important;
    box-shadow: 0 0 0 3px rgba(139,92,246,0.12) !important;
    width: 195px !important;
  }

  .light-nav .luxury-avatar .p-avatar {
    width: 36px !important;
    height: 36px !important;
    border-radius: 50% !important;
    border: 2px solid transparent !important;
    background:
      linear-gradient(#fff, #fff) padding-box,
      linear-gradient(135deg, #7c3aed, #a78bfa, #6d28d9) border-box !important;
    box-shadow: 0 2px 12px rgba(109,40,217,0.25) !important;
    transition: box-shadow 0.3s, transform 0.3s !important;
    cursor: pointer !important;
  }

  .light-nav .luxury-avatar .p-avatar:hover {
    box-shadow: 0 4px 20px rgba(109,40,217,0.4) !important;
    transform: scale(1.06) !important;
  }

  .light-nav .luxury-avatar .p-avatar img {
    border-radius: 50% !important;
  }
`;

export default function TemplateDemo() {
  const itemRenderer = (item: any) => (
    <a className="flex align-items-center p-menuitem-link" style={{ gap: "10px" }}>
      <span className={item.icon} />
      <span style={{ fontFamily: "Syne, sans-serif" }}>{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto shortcut-pill">{item.shortcut}</span>
      )}
    </a>
  );

  const items: any[] = [
    { label: "Home", icon: "pi pi-home" },
    { label: "Features", icon: "pi pi-star" },
    {
      label: "Projects",
      icon: "pi pi-search",
      items: [
        { label: "Core", icon: "pi pi-bolt", shortcut: "⌘+S", template: itemRenderer },
        { label: "Blocks", icon: "pi pi-server", shortcut: "⌘+B", template: itemRenderer },
        { label: "UI Kit", icon: "pi pi-pencil", shortcut: "⌘+U", template: itemRenderer },
        { separator: true },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            { label: "Apollo", icon: "pi pi-palette", badge: 2, template: itemRenderer },
            { label: "Ultima", icon: "pi pi-palette", badge: 3, template: itemRenderer },
          ],
        },
      ],
    },
    { label: "Contact", icon: "pi pi-envelope", badge: 3, template: itemRenderer },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      style={{ height: "30px", objectFit: "contain" }}
    />
  );

  const end = (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div className="luxury-search">
        <InputText placeholder="Search…" type="text" />
      </div>
      <div className="luxury-avatar">
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
          shape="circle"
        />
      </div>
    </div>
  );

  return (
    <div className="light-nav">
      <style>{lightStyles}</style>
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}