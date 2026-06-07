"use client";
import React, { useState } from "react";

export default function ImageDropzone({ label, icon, defaultImage }: { label: string, icon?: string, defaultImage?: string }) {
  const [imgSrc, setImgSrc] = useState(defaultImage || "");

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setImgSrc(URL.createObjectURL(f));
  };

  return (
    <>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImage} 
        style={{ position: "absolute", inset: 0, opacity: 0, cursor: "pointer", width: "100%", height: "100%", zIndex: 2 }} 
      />
      {imgSrc && <img src={imgSrc} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} alt="" />}
      {!imgSrc && icon && <i className={icon} style={{ fontSize: "20px", color: "var(--ink3)", position: "relative", zIndex: 1 }}></i>}
      {!imgSrc && <span style={{ position: "relative", zIndex: 1, textAlign: "center" }}>{label}</span>}
    </>
  );
}
