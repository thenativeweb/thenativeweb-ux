import { Classes } from 'jss';
import ReactDOM from 'react-dom';
import styles from './styles';
import { Button, services, Transition } from '../../..';
import { classNames, withStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement, ReactNode, useCallback, useEffect } from 'react';

const KEY = {
  ENTER: 'Enter',
  ESCAPE: 'Escape'
};

interface ModalProps {
  classes: Classes;
  isVisible: boolean;
  onCancel: () => void;
  attach?: 'left' | 'right' | 'sidebar' | 'center';
  className?: 'string';
  size?: 'sm' | 'md' | 'lg' | 'fullscreen';
  padding?: 'default' | 'none';
  showHeader?: boolean;
  header?: ReactNode;
  onKeyDown?: (key: string, event: KeyboardEvent) => void;
}

const Modal: FunctionComponent<ModalProps> = ({
  attach = 'left',
  classes,
  className,
  children,
  header = null,
  isVisible,
  showHeader = true,
  size = 'sm',
  padding = 'default',
  onCancel,
  onKeyDown = (): void => {
    // Intentionally left blank.
  }
}): ReactElement | null => {
  const backdropClasses = classNames(classes.Backdrop, {
    [classes.IsVisible]: isVisible
  });

  const handleBackDropClicked = useCallback((): void => {
    onCancel();
  }, [ onCancel ]);

  const handleKeyDown = useCallback((event: KeyboardEvent): void => {
    switch (event.key) {
      case KEY.ESCAPE:
        onCancel();
        break;
      case KEY.ENTER:
        break;
      default:
        break;
    }

    onKeyDown(event.key, event);
  }, [ onCancel, onKeyDown ]);

  useEffect((): void => {
    const body = document.querySelector('body');

    if (body) {
      if (isVisible) {
        body.classList.add('thenativeweb-modal--visible');
      } else {
        body.classList.remove('thenativeweb-modal--visible');
      }
    }
  }, [ isVisible ]);

  useEffect((): void => {
    const body = document.querySelector('body');

    document.addEventListener('keydown', handleKeyDown);

    return (): void => {
      if (body) {
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  const chromeClasses = classNames(
    classes.Chrome,
    {
      [classes.ChromeSizeSm]: size === 'sm',
      [classes.ChromeSizeMd]: size === 'md',
      [classes.ChromeSizeLg]: size === 'lg',
      [classes.ChromeSizeFullscreen]: size === 'fullscreen',
      [classes.ChromeAttachedSidebar]: attach === 'sidebar',
      [classes.ChromeAttachedLeft]: attach === 'left',
      [classes.ChromeAttachedRight]: attach === 'right',
      [classes.ChromeAttachedCenter]: attach === 'center',
      [classes.ChromePaddingNone]: padding === 'none'
    },
    className
  );

  let transitionType;

  switch (attach) {
    case 'left':
    case 'sidebar':
      transitionType = 'FadeInRight';
      break;
    case 'right':
      transitionType = 'FadeInLeft';
      break;
    default:
      transitionType = 'Zoom';
  }

  if (!services.excecutionEnvironment.canUseDom) {
    return null;
  }

  return ReactDOM.createPortal(
    (
      <div className={ classes.Modal }>
        <div className={ backdropClasses } onClick={ handleBackDropClicked } />
        <Transition type={ transitionType } in={ isVisible }>

          <div className={ chromeClasses } role='dialog'>
            {
              showHeader ? (
                <div className={ classes.Header }>
                  <div className={ classes.HeaderText }>{ header }</div>
                  <Button
                    className={ classes.HeaderCloseButton }
                    isSubtle={ true }
                    icon='close'
                    onClick={ handleBackDropClicked }
                  />
                </div>
              ) : null
            }
            <div className={ classes.Content }>
              { children }
            </div>
          </div>
        </Transition>
      </div>
    ),
    services.getPortalRootNode()
  );
};

export default withStyles(styles)(Modal);
