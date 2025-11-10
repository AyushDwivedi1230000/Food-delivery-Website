import { generateToken, verifyToken } from './generateToken.js';

describe('JWT Token Generation', () => {
  test('should generate a valid token', () => {
    const userId = 'test-user-id';
    const token = generateToken(userId);

    expect(token).toBeDefined();
    expect(typeof token).toBe('string');
    expect(token.split('.')).toHaveLength(3);
  });

  test('should verify a valid token', () => {
    const userId = 'test-user-id';
    const token = generateToken(userId);
    const decoded = verifyToken(token);

    expect(decoded).toBeDefined();
    expect(decoded.userId).toBe(userId);
  });

  test('should return null for invalid token', () => {
    const invalidToken = 'invalid.token.here';
    const decoded = verifyToken(invalidToken);

    expect(decoded).toBeNull();
  });

  test('should return null for expired token', () => {
    const userId = 'test-user-id';
    const token = generateToken(userId, '-1s');

    setTimeout(() => {
      const decoded = verifyToken(token);
      expect(decoded).toBeNull();
    }, 100);
  });
});
