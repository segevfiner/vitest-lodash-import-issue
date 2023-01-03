import { findLastIndex } from 'lodash';

export function foo(a: ArrayLike<number>, s: number): number {
    return findLastIndex(a, (i) => i === s);
}
