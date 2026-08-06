import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};
const getServerSnapshot = () => false;
const getSnapshot = () => true;

export function useMounted() {
  return useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
}
