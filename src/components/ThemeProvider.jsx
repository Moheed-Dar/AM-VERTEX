'use client';

import { ThemeProvider as Provider } from '@/context/ThemeContext';

export default function ThemeProvider({ children }) {
  return <Provider>{children}</Provider>;
}