// src/utils/useTheme.js
import { useEffect } from 'react';

export function useTheme() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme
      ? savedTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = isDark ? 'dark' : 'light';

    const themes = {
      light: {
        '--overlay': '#b84c4c',
        '--bg': '#dedede',
        '--txt': '#1a1919',
        '--icon-filter': 'none',
        '--cta-color': '#cc0000',
        '--cta-color-hover': '#e60000',
      },
      dark: {
        '--overlay': '#3a5e27',
        '--bg': '#2b2b2b',
        '--txt': '#dedede',
        '--icon-filter': 'invert(1)',
        '--cta-color': '#00cc66',
        '--cta-color-hover': '#00e676',
      },
    };

    const root = document.documentElement;
    const selected = themes[theme];
    for (const key in selected) {
      root.style.setProperty(key, selected[key]);
    }

    localStorage.setItem('theme', theme);
  }, []);
}
