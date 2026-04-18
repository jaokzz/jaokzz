enum UserRole { guest, free, premium }

class User {
  const User({
    required this.id,
    required this.email,
    required this.displayName,
    required this.role,
    required this.level,
    required this.xp,
  });

  final String id;
  final String email;
  final String displayName;
  final UserRole role;
  final int level;
  final int xp;
}
