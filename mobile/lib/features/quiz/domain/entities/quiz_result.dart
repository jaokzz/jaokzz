class QuizResult {
  const QuizResult({
    required this.id,
    required this.systemId,
    required this.score,
    required this.accuracy,
    required this.timeSeconds,
    required this.xpGained,
    required this.correctAnswers,
    required this.totalQuestions,
    required this.createdAt,
  });

  final String id;
  final String systemId;
  final int score;
  final double accuracy;
  final int timeSeconds;
  final int xpGained;
  final int correctAnswers;
  final int totalQuestions;
  final DateTime createdAt;
}
