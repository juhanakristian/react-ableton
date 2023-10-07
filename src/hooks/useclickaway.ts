import { RefObject, useEffect } from "react";

export default function useClickAway<T extends HTMLElement>(
  ref: RefObject<T>,
  onClickAway: (event: MouseEvent) => void,
) {
  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickAway(event);
      }
    };

    document.addEventListener("click", handleClickAway);

    return () => {
      document.removeEventListener("click", handleClickAway);
    };
  }, [ref, onClickAway]);
}
