import { StagewiseToolbar } from '@stagewise/toolbar-react';

const stagewiseConfig = {
  plugins: []
};

export const StagewiseDevToolbar = () => {
  if (process.env.NODE_ENV !== 'development') return null;
  return <StagewiseToolbar config={stagewiseConfig} />;
};
