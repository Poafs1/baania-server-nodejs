import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddHome1689526485267 implements MigrationInterface {
  name = 'AddHome1689526485267';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "home" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying NOT NULL, "desc" character varying, "price" numeric NOT NULL, "post_code" character varying NOT NULL, CONSTRAINT "PK_012205783b51369c326a1ad4a64" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`CREATE INDEX "IDX_b5b35aad91bf215a334ec27798" ON "home" ("name") `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_b5b35aad91bf215a334ec27798"`);
    await queryRunner.query(`DROP TABLE "home"`);
  }
}
