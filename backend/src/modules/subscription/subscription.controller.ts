import { Controller, Get, Post } from '@nestjs/common';

@Controller('subscription')
export class SubscriptionController {
  @Get('plans')
  plans() {
    return [
      { id: 'monthly', cycle: 'monthly', price: 29.9, highlighted: false },
      { id: 'yearly', cycle: 'yearly', price: 199.9, highlighted: true },
      { id: 'lifetime', cycle: 'lifetime', price: 799.9, highlighted: false },
    ];
  }

  @Post('validate')
  validateReceipt() {
    return { active: true, tier: 'premium', source: 'apple_or_google_or_stripe' };
  }
}
