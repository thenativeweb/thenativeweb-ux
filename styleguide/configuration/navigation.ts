import { Language } from '../../lib/types/Language';
import { PageTreeItem } from '../../lib';

type Navigation = Record<Language, PageTreeItem []>;

/* eslint-disable object-property-newline */
const navigation: Navigation = {
  'en-US': [
    { title: 'Components', children: [
      { title: 'Roots', children: [
        { title: 'Application' },
        { title: 'Website' },
        { title: 'ThemeProvider' }
      ]},
      { title: 'Layout', children: [
        { title: 'Space' },
        { title: 'Container' },
        { title: 'Footer' },
        { title: 'Grid' },
        { title: 'HorizontalBar' },
        { title: 'Sidebar', keywords: [ 'menu', 'navigation' ]}
      ]},
      { title: 'Branding', children: [
        { title: 'Brand' },
        { title: 'MadeBy' },
        { title: 'Pattern' },
        { title: 'PoweredBy' },
        { title: 'Product' }
      ]},
      { title: 'Typography', children: [
        { title: 'Headline' },
        { title: 'Paragraph' },
        { title: 'Text' }
      ]},
      { title: 'Graphics', children: [
        { title: 'Icon' },
        { title: 'LogoFull' },
        { title: 'LogoMinimal' },
        { title: 'LogoTheNativeWeb' },
        { title: 'LogoWolkenkit' }
      ]},
      { title: 'Input', children: [
        { title: 'Button' },
        { title: 'CheckBox' },
        { title: 'Dropdown', keywords: [ 'combobox' ]},
        { title: 'Link' },
        { title: 'TextArea' },
        { title: 'TextBox' },
        { title: 'Toggle', keywords: [ 'radiobutton' ]}
      ]},
      { title: 'Forms', children: [
        { title: 'ControlGroup' },
        { title: 'Form' }
      ]},
      { title: 'Feedback', children: [
        { title: 'BusyIndicator', keywords: [ 'loading' ]},
        { title: 'HighlightText' },
        { title: 'Message' },
        { title: 'Modal' },
        { title: 'NonIdealState' },
        { title: 'Tags' }
      ]},
      { title: 'Navigation', children: [
        { title: 'Breadcrumbs' },
        { title: 'MobileToggle' },
        { title: 'PageNavigation' }
      ]},
      { title: 'Animation', children: [
        { title: 'Transition' },
        { title: 'TransitionGroup' }
      ]},
      { title: 'Documentation', children: [
        { title: 'Code' }
      ]}
    ]},
    { title: 'Services', children: [
      { title: 'dialogs' },
      { title: 'notifications' }
    ]},
    { title: 'Extending and Customizing', children: [
      { title: 'Creating custom components' },
      { title: 'Creating custom themes' }
    ]}
  ]
};
/* eslint-enable object-property-newline */

export { navigation };
