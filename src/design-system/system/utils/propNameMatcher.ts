export const isChildrenProp = (propName: string) => propName === 'children';

export const isDataProp = (propName: string) => propName.startsWith('data-');

export const isAriaProp = (propName: string) => propName.startsWith('aria-');

export const isBasicProp = (propName: string) => ['id', 'htmlFor'].includes(propName);
