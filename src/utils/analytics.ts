declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackGAEvent = (name: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params || {});
  }
};