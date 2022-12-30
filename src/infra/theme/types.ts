interface Color {
  brand: {
    primary: string;
    secondary: string;
    muted: string;
  };

  ui: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    disabled: string;
    error: string;
    success: string;
  };

  bg: {
    primary: string;
    secondary: string;
  };

  text: {
    primary: string;
    secondary: string;
    disabled: string;
    inverse: string;
    error: string;
    success: string;
  };
}

interface Font {
  body: string;
  heading: string;
  monospace: string;
}

interface FontWeight {
  regular: string;
  medium: string;
  bold: string;
}

interface FontSize {
  caption: string;
  button: string;
  body: string;
  title: string;
  h5: string;
  h4: string;
  h3: string;
  h2: string;
  h1: string;
}

export interface Theme {
  colors: Color;
  space: string[];
  lineHeights: { title: string; copy: string };
  sizes: string[];
  fonts: Font;
  fontSizes: FontSize;
  fontWeights: FontWeight;
}
