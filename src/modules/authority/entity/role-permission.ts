import { EntityModel } from '@midwayjs/orm';
import { Entity, PrimaryColumn } from 'typeorm';

/**
 * 角色权限多对多
 */
@EntityModel('sys_role_permission')
@Entity('sys_role_permission')
export class RolePermissionEntity {
  @PrimaryColumn()
  roleId: number;
  @PrimaryColumn()
  permissionId: number;
}
