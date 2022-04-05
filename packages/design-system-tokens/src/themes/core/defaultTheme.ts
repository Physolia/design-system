import { animation, color, font, measure, media, spacer, z } from '../../tokens';
import { to, ThemeTokens, ColorTokens } from '../../lib/types';
import { hexOpacity } from '../../lib/utility';

const description = 'Default CMSDS Core Theme';

const themeColors: ColorTokens = {
  white: color.white,
  base: color['granite-900'],
  black: color.black,
  'gray-dark': color['granite-800'],
  gray: color['granite-700'],
  'gray-medium': color['granite-600'],
  'gray-light': color['granite-300'],
  'gray-lighter': color['granite-100'],
  'gray-lightest': color['granite-50'],
  'gray-warm-dark': color['granite-800'],
  'gray-warm-light': color['granite-50'],
  'gray-cool-light': color['ocean-50'],
  primary: color['ocean-500'],
  'primary-darker': color['ocean-700'],
  'primary-darkest': color['ocean-800'],
  'primary-alt': color['sky-500'],
  'primary-alt-dark': color['sky-600'],
  'primary-alt-darkest': color['sky-800'],
  'primary-alt-light': color['dark-sky-200'],
  'primary-alt-lightest': color['sky-50'],
  red: color['rose-500'],
  'red-dark': color['rose-600'],
  'red-darker': color['rose-700'],
  'red-darkest': color['rose-800'],
  'red-light': color['rose-200'],
  'red-lighter': color['rose-100'],
  'red-lightest': color['rose-50'],
  gold: color['goldenrod-500'],
  'gold-dark': color['goldenrod-600'],
  'gold-darker': color['goldenrod-700'],
  'gold-darkest': color['goldenrod-800'],
  'gold-light': color['goldenrod-400'],
  'gold-lighter': color['goldenrod-200'],
  'gold-lightest': color['goldenrod-50'],
  green: color['spring-500'],
  'green-dark': color['spring-600'],
  'green-darker': color['spring-700'],
  'green-darkest': color['spring-800'],
  'green-light': color['spring-400'],
  'green-lighter': color['spring-200'],
  'green-lightest': color['spring-50'],
  'cool-blue': color['sapphire-600'],
  'cool-blue-light': color['sapphire-500'],
  'cool-blue-lighter': color['sapphire-200'],
  'cool-blue-lightest': color['sapphire-50'],
  focus: color['dark-sky-500'],
  'focus-inverse': color['sky-500'],
  'focus-border-inverse': color['goldenrod-800'],
  'focus-light': color.white,
  'focus-dark': color['orchid-500'],
  visited: color['windsor-500'],
  error: color['rose-500'],
  'error-dark': color['rose-600'],
  'error-darker': color['rose-700'],
  'error-darkest': color['rose-800'],
  'error-light': color['rose-200'],
  'error-lighter': color['rose-100'],
  'error-lightest': color['rose-50'],
  warn: color['goldenrod-500'],
  'warn-dark': color['goldenrod-600'],
  'warn-darker': color['goldenrod-700'],
  'warn-darkest': color['goldenrod-800'],
  'warn-light': color['goldenrod-400'],
  'warn-lighter': color['goldenrod-200'],
  'warn-lightest': color['goldenrod-50'],
  success: color['spring-500'],
  'success-dark': color['spring-600'],
  'success-darker': color['spring-700'],
  'success-darkest': color['spring-800'],
  'success-light': color['spring-400'],
  'success-lighter': color['spring-200'],
  'success-lightest': color['spring-50'],
  muted: color['granite-700'],
  'muted-inverse': color['lapis-50'],
  'base-inverse': color.white,
  background: color.white,
  'background-inverse': color['ocean-800'],
  'background-dialog': color.white,
  border: color['granite-100'],
  'border-dark': color['lapis-800'],
  'border-inverse': color.white,
  'focus-shadow': color['granite-900'],
  'focus-shadow-inverse': color['granite-900'],
  'focus-shadow-link': color['granite-900'],
  'focus-shadow-link-inverse': color['goldenrod-800'],
  'background-dialog-mask': hexOpacity('#000000', 50),
};

const components = {};

const shadow = {
  focus: `inset 0 0 0 1px ${themeColors.base}`,
  'focus-inverse': `inset 0 0 0 1px ${themeColors.base}`,
  'focus-link': `0 3px ${themeColors.base}`,
  'focus-link-inverse': `0 3px ${themeColors['focus-border-inverse']}`,
  'base-offset-x': '2px',
  'base-offset-y': '2px',
  'base-blur-radius': '4px',
  'base-color': hexOpacity('#000000', 25),
  base: '2px 2px 4px',
};

const DefaultTheme = to<ThemeTokens>()({
  animation,
  color: themeColors,
  components,
  description,
  font: {
    sans: font['family-open-sans'],
    serif: font['family-bitter'],
    ...font,
  },
  measure,
  media,
  shadow,
  spacer,
  z,
});

export default DefaultTheme;
