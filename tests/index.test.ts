import { expect, it, describe } from 'vitest';
import { connect, Database } from '../src';
describe('Test the vitest', () => {
  it('should run without errors', () => {
    expect(1 + 1).toBe(2);
  });
  it('should host the mongoose package', () => {
    expect(connect).toBeDefined();
  });
});
