import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Books1711040637073 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(`
    //     --Table Definition
    //     CREATE TABLE "books"  (
    //         "book_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    //         "title" character varying NOT NULL,
    //         "cover" character varying NOT NULL,
    //         "point" numeric varying NOT NULL,
    //         "writer_id" character varying NOT NULL,
    //         "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
    //         "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
    //         CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("book_id")
    //       )
    //       `),
    //   undefined;
    await queryRunner.createTable(
      new Table({
        name: 'books',
        columns: [
          {
            name: 'book_id',
            type: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cover',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'point',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'writer_id',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(`DROP TABLE "books"`, undefined);
    await queryRunner.dropTable('books', true, true, true);
  }
}
