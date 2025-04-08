import argon2 from 'argon2';

/**
 * Hashes a plain text password using Argon2.
 * @param password - The plain text password to hash.
 * @returns The hashed password as a string.
 */
export async function hashPassword(password: string): Promise<string> {
  return await argon2.hash(password);
}

/**
 * Verifies a plain text password against a hashed password.
 * @param hashedPassword - The stored hashed password.
 * @param plainPassword - The plain text password to verify.
 * @returns True if the password matches, otherwise false.
 */
export async function verifyPassword(
  hashedPassword: string,
  plainPassword: string
): Promise<boolean> {
  return await argon2.verify(hashedPassword, plainPassword);
}
