import { Module } from '@nestjs/common';

import { AnatomyController } from './anatomy.controller';

@Module({
  controllers: [AnatomyController],
})
export class AnatomyModule {}
