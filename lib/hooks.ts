import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * False on the server and during the first client render, true afterwards.
 *
 * Use it to keep values that only exist in the browser (the current date,
 * localStorage) out of the prerendered HTML, without calling setState from an
 * effect — which React 19 flags as a cascading render.
 */
export function useIsHydrated() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}
