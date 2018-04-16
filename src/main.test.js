import { validateEmail } from './main.js';

describe('Validate an email', () => {
  it('should return true if the input is a valid email and false if not.', () => {
    expect(validateEmail('lkdfnzfdg')).toBe(false);
    expect(validateEmail('1@2.sd')).toBe(true);
    expect(validateEmail('hello')).toBe(false);
    expect(validateEmail('1735')).toBe(false);
  });
});
