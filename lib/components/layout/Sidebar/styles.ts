import { ComponentClassNames, Theme } from '../../..';

export type SidebarClassNames = 'Sidebar';

const styles = (theme: Theme): ComponentClassNames<SidebarClassNames> => ({
  Sidebar: {
    position: 'relative',
    flexGrow: 0,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'content-box',
    width: theme.components.Sidebar.width,
    background: theme.color.brand.grayDark,
    padding: `${theme.space(2)}px 0`
  }
});

export { styles };
