import { Suspense, memo } from 'react';

type ComponentProps = Record<string, unknown>;
export default function applySuspenseLoading<TProps extends ComponentProps>(
  Component: (props: TProps) => React.ReactNode
) {
  return memo((props: TProps) => {
    return (
      <Suspense fallback={<h1>Loading</h1>}>
        <Component {...props} />
      </Suspense>
    );
  });
}
