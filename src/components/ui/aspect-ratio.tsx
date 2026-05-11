'use client';

import * as React from 'react';
import { AspectRatio } from 'radix-ui';

function AspectRatio({ ...props }: React.ComponentProps<typeof AspectRatio.Root>) {
  return <AspectRatio.Root data-slot='aspect-ratio' {...props} />;
}

export { AspectRatio };
