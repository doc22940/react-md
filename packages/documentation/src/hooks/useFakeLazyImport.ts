import { FC, useMemo, lazy, LazyExoticComponent } from "react";

function fakeImport<P>(
  Component: FC<P>,
  delay: number
): Promise<{ default: FC<P> }> {
  return new Promise(resolve => {
    window.setTimeout(() => {
      resolve({ default: Component });
    }, delay);
  });
}

/**
 * This is a hook that will allow lazily import a component each time the `Component`
 * changes or the `key` changes so that it can work with `Suspense` from React.
 *
 *
 * You should probably never do this... but this is a way to make it so that
 * the lazy loaded component can be re-loaded infinitely after resetting the
 * demo. Without this, the lazy implementation will immediately resolve the
 * fake import and not show any progress
 */
export default function useFakeLazyImport<P = {}>(
  Component: FC<P>,
  key: string | number | null = null,
  delay: number = 5000
): LazyExoticComponent<FC<P>> {
  // disabled since this is really hacky and want it to also update if the key changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => lazy(() => fakeImport(Component, delay)), [
    Component,
    key,
    delay,
  ]);
}
