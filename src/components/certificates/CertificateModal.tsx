"use client";

import React, { useEffect } from "react";
import { UserCertificate } from "@/lib/certificates/types";
import { CertificateView } from "./CertificateView";

interface CertificateModalProps {
  cert: UserCertificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateModal({ cert, isOpen, onClose }: CertificateModalProps) {
  useEffect(() => {
    // ESC key closes modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl my-auto animate-in fade-in zoom-in-95 duration-200">
        <CertificateView cert={cert} onClose={onClose} showPrintButton={true} />
      </div>
    </div>
  );
}
