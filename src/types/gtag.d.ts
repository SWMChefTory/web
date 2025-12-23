/**
 * Google Analytics 4 (GA4) gtag 타입 선언
 *
 * window.gtag 함수의 TypeScript 타입을 정의하여
 * 이벤트 추적 시 타입 안정성을 제공합니다.
 */

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js',
      targetOrEventName: string | Date,
      eventParams?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

export {};
