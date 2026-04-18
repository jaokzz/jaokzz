import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(email: string, password: string) {
    if (!email || !password) throw new UnauthorizedException('Invalid credentials');

    return {
      accessToken: 'jwt_access_token',
      refreshToken: 'jwt_refresh_token',
      user: {
        id: 'usr_123',
        email,
        displayName: 'ANATOMIX User',
        role: 'free',
      },
    };
  }

  async guestAccess() {
    return {
      accessToken: 'guest_jwt',
      user: { id: 'guest', role: 'guest' },
      limits: { maxSystems: 1, examAttemptsPerDay: 3 },
    };
  }
}
