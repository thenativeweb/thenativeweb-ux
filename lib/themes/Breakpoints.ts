export interface Breakpoints {
  steps: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  up: (size: Size | number) => string;
  down: (size: Size | number) => string;
  between: (lowerSize: Size | number, upperSize: Size | number) => string;
  only: (size: Size) => string;
}
