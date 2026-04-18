import 'package:flutter/material.dart';

class AppTheme {
  static ThemeData get dark {
    const accent = Color(0xFF8B5CF6);
    return ThemeData(
      brightness: Brightness.dark,
      scaffoldBackgroundColor: const Color(0xFF040B20),
      colorScheme: const ColorScheme.dark(
        primary: accent,
        secondary: Color(0xFF22D3EE),
        surface: Color(0xFF101A32),
      ),
      cardTheme: const CardThemeData(
        color: Color(0xFF121D38),
        elevation: 0,
      ),
      useMaterial3: true,
    );
  }
}
