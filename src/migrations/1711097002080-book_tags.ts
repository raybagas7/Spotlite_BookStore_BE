import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class BookTags1711097002080 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'book_tags',
        columns: [
          {
            name: 'book_id',
            type: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'tag_id',
            type: 'uuid',
            default: 'uuid_generate_v4()',
          },
        ],
      })
    );

    await queryRunner.createForeignKeys('book_tags', [
      new TableForeignKey({
        columnNames: ['book_id'],
        referencedColumnNames: ['book_id'],
        referencedTableName: 'books',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['tag_id'],
        referencedColumnNames: ['tag_id'],
        referencedTableName: 'tags',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('book_tags', true, true, true);
  }
}
