import { Controller, Get, Param } from '@nestjs/common';

@Controller('anatomy')
export class AnatomyController {
  @Get('systems')
  listSystems() {
    return [
      { id: 'muscular', name: 'Muscular', progress: 0.64 },
      { id: 'skeletal', name: 'Skeletal', progress: 0.45 },
      { id: 'nervous', name: 'Nervous', progress: 0.22 },
      { id: 'cardio', name: 'Cardiovascular', progress: 0.78 },
    ];
  }

  @Get('systems/:id/structures')
  listStructures(@Param('id') systemId: string) {
    return {
      systemId,
      items: [
        {
          id: 'str_1',
          name: 'Sternocleidomastoid',
          description: 'Neck muscle.',
          function: 'Neck flexion and rotation',
          origin: 'Manubrium and clavicle',
          insertion: 'Mastoid process',
          systemType: 'muscular',
        },
      ],
    };
  }
}
