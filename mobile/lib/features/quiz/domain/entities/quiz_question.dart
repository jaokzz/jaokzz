enum QuizQuestionType { identifyIn3d, multipleChoice, functionBased }

class QuizQuestion {
  const QuizQuestion({
    required this.id,
    required this.systemId,
    required this.type,
    required this.prompt,
    required this.options,
    required this.correctAnswer,
    this.structureId,
  });

  final String id;
  final String systemId;
  final QuizQuestionType type;
  final String prompt;
  final List<String> options;
  final String correctAnswer;
  final String? structureId;
}
