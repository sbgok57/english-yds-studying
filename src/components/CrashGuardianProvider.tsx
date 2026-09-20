"use client";

import React, { Component, ReactNode, useEffect } from "react";
import { initCrashGuardian, reportCrash } from "@/lib/crash-guardian";
import { getHardwareProfile } from "@/lib/hardware-optimizer";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorCount: number;
}

class RootCrashBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    reportCrash(error, `ReactBoundary: ${errorInfo.componentStack?.slice(0, 150) || "unknown"}`);
    this.setState((prev) => ({ errorCount: prev.errorCount + 1 }));
  }

  handleSelfHeal = () => {
    // Attempt local state recovery
    this.setState({ hasError: false, error: null });
  };

  handleReloadSafe = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[60vh] flex items-center justify-center p-6 text-white">
          <div className="max-w-md w-full rounded-3xl border border-rose-500/30 bg-slate-900/90 backdrop-blur-2xl p-8 text-center shadow-2xl shadow-rose-950/40 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-3xl">
              🛡️
            </div>
            <h2 className="text-xl font-black text-white">Durum Güvenle İzolasyona Alındı</h2>
            <p className="text-sm text-white/70 leading-relaxed">
              Arka plan koruma motoru (Crash Guardian) hatayı yakaladı. Sınav cevapların ve ilerlemen
              hafızada korundu; verilerin silinmedi.
            </p>
            {this.state.error && (
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-left font-mono text-xs text-rose-300 break-words line-clamp-3">
                {this.state.error.message}
              </div>
            )}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={this.handleSelfHeal}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 font-bold text-sm shadow-lg shadow-emerald-950/40 transition-all flex items-center justify-center gap-1.5"
              >
                <span>🔄</span>
                <span>Onar ve Devam Et</span>
              </button>
              <button
                onClick={this.handleReloadSafe}
                className="py-3 px-4 rounded-xl border border-white/15 hover:bg-white/10 text-sm font-medium transition-colors"
              >
                Ana Sayfa
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function CrashGuardianProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize background crash supervisor and hardware optimization profile
    initCrashGuardian();
    getHardwareProfile();
  }, []);

  return <RootCrashBoundary>{children}</RootCrashBoundary>;
}
