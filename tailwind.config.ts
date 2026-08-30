import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0f0c',
        surface: '#111a14',
        surface2: '#16221b',
        leafBright: '#8fe05a',
        leafDeep: '#2f7d32',
        steel: '#c3cbd1',
        steelDim: '#7d8a8f',
        paper: '#f3f6f1',
        paperDim: '#aab3ac',
        line: 'rgba(195,203,209,0.14)'
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      borderRadius: {
        sm: '3px',
        md: '6px',
        lg: '8px'
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(.165,.84,.44,1)',
        'out-expo': 'cubic-bezier(.19,1,.22,1)',
        'in-out-cubic': 'cubic-bezier(.645,.045,.355,1)'
      }
    }
  },
  plugins: []
};

export default config;
