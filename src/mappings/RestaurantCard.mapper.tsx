import { figmaMapping, type BaseFigmaProps } from '@builder.io/dev-tools/figma';
import RestaurantCard from '@/design-system/RestaurantCard/RestaurantCard';

// ❖ Restaurant Card
interface FigmaRestaurantCardProps extends BaseFigmaProps {
  hasCTA?: boolean;
  State?: 'Default' | 'Hover';
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: 'Restaurant Card',
  componentKey: '98a1083352479a0ce3ede03aa0fa88c499cdb9ea',
  mapper(figma: FigmaRestaurantCardProps) {
    return <RestaurantCard>{figma.$children}</RestaurantCard>;
  },
});
