'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.products1645616920345 = void 0;
const typeorm_1 = require('typeorm');
class products1645616920345 {
  constructor() {
    this.products = new typeorm_1.Table({
      name: 'products',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'img',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'description',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'price',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'ref',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'age',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'nbPlayers',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'timing',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'video',
          type: 'varchar',
          isNullable: true,
        },
      ],
    });
  }
  async up(queryRunner) {
    await queryRunner.createTable(this.products, true);
  }
  async down(queryRunner) {
    await queryRunner.dropTable(this.products, true);
  }
}
exports.products1645616920345 = products1645616920345;
//# sourceMappingURL=1645616920345-products.js.map
