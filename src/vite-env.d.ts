declare module 'react' {
  interface CSSProperties {
    [key: string]: any;
  }
}

declare global {
  interface Window {
    webkitAudioContext: any;
  }
}

export {}
