import colors from '@/design-tokens/colors';
import radii from '@/design-tokens/radii';
import space from '@/design-tokens/space';
import size from '@/design-tokens/size';
import timing from '@/design-tokens/timing';
import typography from '@/design-tokens/typography';

export const theme = {
  name: 'Theme',
  colors,
  radii,
  space,
  timing,
  size,
  typography,
} as const;
