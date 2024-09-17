import { memo } from 'react';
const Route = memo(
  ({ children }: { path: string | string[]; children: React.ReactNode }) => {
    return children;
  },
);

Route.displayName = 'Route';
export { Route };
