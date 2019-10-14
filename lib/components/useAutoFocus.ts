import { Ref, useCallback, useEffect, useRef } from 'react';

const useAutoFocus = <TRef extends HTMLTextAreaElement | HTMLInputElement>({ isEnabled = false, delay = 0 }): Ref<TRef> => {
  const elementRef = useRef<TRef>(null);

  const handleFocusTimeout = useCallback((): void => {
    if (elementRef.current) {
      elementRef.current.focus();
    }
  }, []);

  useEffect((): () => void => {
    let focusTimeout: any;

    if (isEnabled) {
      focusTimeout = setTimeout(handleFocusTimeout, delay);
    }

    return (): void => {
      if (focusTimeout) {
        clearTimeout(focusTimeout);
      }
    };
  }, []);

  return elementRef;
};

export default useAutoFocus;
