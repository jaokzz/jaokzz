import { Body, Controller, Post } from '@nestjs/common';

@Controller('quiz')
export class QuizController {
  @Post('start')
  startExam(@Body() payload: { systemId: string; difficulty: 'easy' | 'medium' | 'hard' }) {
    return {
      examId: 'exam_123',
      systemId: payload.systemId,
      difficulty: payload.difficulty,
      timerSeconds: 900,
      totalQuestions: 20,
    };
  }

  @Post('submit')
  submitExam(@Body() payload: { examId: string; answers: Array<{ questionId: string; answer: string }> }) {
    return {
      examId: payload.examId,
      score: 18,
      accuracy: 0.9,
      correctAnswers: 18,
      totalQuestions: 20,
      timeSeconds: 134,
      xpGained: 180,
      feedback: 'Excelente trabalho!'
    };
  }
}
