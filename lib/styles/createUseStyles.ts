import { ComponentClassNames } from '../types/ComponentClassNames';
import { createUseStyles } from 'react-jss';
import { Theme } from '../themes/Theme';

type Classes<TName extends string> = Record<TName, string>;

type UseStyles<TClassNames extends string> = () => Classes<TClassNames>;

type CreateUseStylesParameterWithTheme<TClassNames extends string, TTheme> = (theme: TTheme) => ComponentClassNames<TClassNames>;

type CreateUseStylesParameter<TClassNames extends string> = ComponentClassNames<TClassNames>;

const customCreateUseStyles = <TClassNames extends string, TTheme extends Theme = Theme>(
  styles: CreateUseStylesParameter<TClassNames> | CreateUseStylesParameterWithTheme<TClassNames, TTheme>
): UseStyles<TClassNames> =>
  createUseStyles(styles as any) as UseStyles<TClassNames>;

export { customCreateUseStyles as createUseStyles };
