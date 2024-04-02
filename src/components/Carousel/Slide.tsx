import { ReactNode } from 'react';

export function Slide({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}
