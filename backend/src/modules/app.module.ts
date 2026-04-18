import { Module } from '@nestjs/common';

import { AnatomyModule } from './anatomy/anatomy.module';
import { AuthModule } from './auth/auth.module';
import { QuizModule } from './quiz/quiz.module';
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  imports: [AuthModule, AnatomyModule, QuizModule, SubscriptionModule],
})
export class AppModule {}
