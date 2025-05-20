import { builder, Builder } from '@builder.io/react';
import dynamic from 'next/dynamic';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(
  dynamic(() => import('./design-system/Button/Button')),
  {
    name: 'Button',
  }
);

Builder.registerComponent(
  dynamic(() => import('./design-system/RestaurantCard/RestaurantCard')),
  {
    name: 'RestaurantCard',
    inputs: [
      {
        name: 'restaurant',
        type: 'object',
        hideFromUI: true,
        meta: {
          ts: 'Restaurant',
        },
        required: true,
      },
    ],
  }
);
