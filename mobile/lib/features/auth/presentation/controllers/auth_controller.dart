import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../domain/entities/user.dart';

final authControllerProvider = StateNotifierProvider<AuthController, AsyncValue<User?>>(
  (ref) => AuthController(),
);

class AuthController extends StateNotifier<AsyncValue<User?>> {
  AuthController() : super(const AsyncValue.data(null));

  Future<void> signInAsGuest() async {
    state = const AsyncValue.loading();
    state = AsyncValue.data(
      const User(
        id: 'guest',
        email: 'guest@anatomix.app',
        displayName: 'Guest',
        role: UserRole.guest,
        level: 1,
        xp: 0,
      ),
    );
  }
}
