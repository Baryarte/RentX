import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddBrandColumnOnCars1677642138797 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "cars",
      new TableColumn({
        name: "brand",
        type: "varchar"
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("cars", "brand");
  }
}
