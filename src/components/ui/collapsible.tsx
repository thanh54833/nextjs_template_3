'use client';

import * as React from 'react';
import * as RadixCollapsible from 'radix-ui';

function Collapsible({ ...props }: React.ComponentProps<typeof RadixCollapsible.Root>) {
  return <RadixCollapsible.Root data-slot='collapsible' {...props} />;
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof RadixCollapsible.CollapsibleTrigger>) {
  return <RadixCollapsible.CollapsibleTrigger data-slot='collapsible-trigger' {...props} />;
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof RadixCollapsible.CollapsibleContent>) {
  return <RadixCollapsible.CollapsibleContent data-slot='collapsible-content' {...props} />;
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };