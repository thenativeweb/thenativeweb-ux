import { Code, Headline, Link, Paragraph } from '..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Creating custom components</Headline>

    <Paragraph>
      <code>thenativeweb-ux</code> uses <Link href='https://cssinjs.org'>JSS</Link> and <Link href='https://github.com/JedWatson/classnames'>classnames</Link> to
      style its components. If you create custom components, you can use same
      underlying technologies to create styles using TypeScript.
    </Paragraph>

    <Code language='tsx'>{`
      import { Styles } from 'jss';
      import { classNames, createUseStyles, Styles, Theme } from '../../../../lib';
      import React, { FunctionComponent, ReactElement } from 'react';

      const useStyles = createUseStyles<Theme, 'CustomComponent' | 'SizeLg'>((theme: Theme): Styles => ({
        CustomComponent: {
          width: theme.custom.components.CustomComponent.width
        },

        SizeLg: {
          fontSize: '24px'
        }
      }));

      interface CustomComponentProps {
        className?: string;
        id: string;
        size?: 'lg';
      }

      const CustomComponent: FunctionComponent<CustomComponentProps> = ({
        className,
        children,
        id,
        size
      }): ReactElement => {
        const classes = useStyles();
        const componentClasses = classNames(
          classes.CustomComponent,
          {
            [classes.SizeLg]: size === 'lg'
          },
          className
        );

        return (
          <div id={ id } className={ componentClasses }>
            { children }
          </div>
        );
      };

      export { CustomComponent };
    `}
    </Code>
  </React.Fragment>
);

export { Documentation };
