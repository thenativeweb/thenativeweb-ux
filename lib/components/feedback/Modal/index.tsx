import ReactDOM from 'react-dom';
import { TransitionType } from '../../animation/Transition/TransitionType';
import { Button, excecutionEnvironment, getPortalRootNode, Theme, Transition } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import { ModalClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement, useCallback, useEffect } from 'react';

interface ModalProps {
  isVisible: boolean;
  onCancel: () => void;
  attach?: 'left' | 'right' | 'sidebar' | 'center';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'fullscreen';
  padding?: 'default' | 'none';
  showHeader?: boolean;
  header?: string;
  portalRootNode?: HTMLElement;
  onKeyDown?: (key: string, event: KeyboardEvent) => void;
}

const useStyles = createUseStyles<Theme, ModalClassNames>(styles);

const Modal: FunctionComponent<ModalProps> = ({
  attach = 'left',
  className,
  children,
  header = null,
  isVisible,
  showHeader = true,
  size = 'sm',
  padding = 'default',
  portalRootNode = getPortalRootNode(),
  onCancel,
  onKeyDown = (): void => {
    // Intentionally left blank.
  }
}): ReactElement | null => {
  const classes = useStyles();
  const backdropClasses = classNames(classes.Backdrop, {
    [classes.IsVisible]: isVisible
  });

  const handleBackDropClicked = useCallback((): void => {
    onCancel();
  }, [ onCancel ]);

  const handleKeyDown = useCallback((event: KeyboardEvent): void => {
    switch (event.key) {
      case 'Escape':
        onCancel();
        break;
      case 'Enter':
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

  useEffect((): (() => void) => {
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

  let transitionType: TransitionType;

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

  if (!excecutionEnvironment.canUseDom) {
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
    portalRootNode
  );
};

export { Modal };
