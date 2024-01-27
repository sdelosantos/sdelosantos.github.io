import { Suspense, memo } from 'react';
import Loading from '../Loading/Loading';

type ComponentProps = Record<string, unknown>;
export default function applySuspenseLoading<TProps extends ComponentProps>(
  Component: (props: TProps) => React.ReactNode,
  loadingMessage: string
) {
  return memo((props: TProps) => {
    return (
      <Suspense fallback={<Loading message={loadingMessage} />}>
        <Component {...props} />
      </Suspense>
    );
  });
}
