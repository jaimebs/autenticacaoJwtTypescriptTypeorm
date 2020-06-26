import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1593103412285 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Query usada para criar uuid no postgres que por defaul não vem habilitado.
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'varchar',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
        await queryRunner.query('DROP EXTESION "uuid-ossp"');
    }

}
