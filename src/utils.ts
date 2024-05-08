import { stringInterpolator } from '@graphql-mesh/string-interpolation';

export const evaluate = (value?: string): string | undefined => {
    return stringInterpolator.parse(value, { env: process.env });
};
