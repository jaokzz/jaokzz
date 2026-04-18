import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../controllers/auth_controller.dart';

class LoginPage extends ConsumerWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Spacer(),
              Text('ANATOMIX', style: Theme.of(context).textTheme.headlineMedium),
              const SizedBox(height: 8),
              const Text('Learn · Explore · Master'),
              const SizedBox(height: 24),
              FilledButton(
                onPressed: () => context.go('/home'),
                child: const Text('Login with Email'),
              ),
              const SizedBox(height: 12),
              OutlinedButton(
                onPressed: () async {
                  await ref.read(authControllerProvider.notifier).signInAsGuest();
                  if (context.mounted) context.go('/home');
                },
                child: const Text('Continue as Guest'),
              ),
              const Spacer(),
            ],
          ),
        ),
      ),
    );
  }
}
