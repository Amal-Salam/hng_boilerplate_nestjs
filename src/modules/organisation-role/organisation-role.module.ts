import { Module } from '@nestjs/common';
import { OrganisationRoleService } from './organisation-role.service';
import { OrganisationRoleController } from './organisation-role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganisationRole } from './entities/organisation-role.entity';
import { Organisation } from '../organisations/entities/organisations.entity';
import { Permissions } from '../organisation-permissions/entities/permissions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrganisationRole, Permissions, Organisation])],
  controllers: [OrganisationRoleController],
  providers: [OrganisationRoleService],
})
export class OrganisationRoleModule {}
