import { EntityModel } from '@midwayjs/orm';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

/**
 * 角色
 */
@EntityModel('sys_role')
@Entity('sys_role')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Index({ unique: true })
  @Column({ comment: '角色名称', length: 100 })
  name: string;

  @Column({ comment: '创建时间', default: () => 'CURRENT_TIMESTAMP' })
  createTime: Date;
  @Column({ comment: '修改时间', default: () => 'CURRENT_TIMESTAMP' })
  updateTime: Date;

  // @ManyToMany(type => PermissionEntity, res => res.roles)
  // @JoinTable({
  //   name: 'sys_role_resources',
  //   joinColumn: {
  //     name: 'roleId',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'resourceId',
  //     referencedColumnName: 'id',
  //   },
  // })
  // resources: PermissionEntity[];

  // @ManyToMany(type => UserEntity, res => res.roles)
  // users: UserEntity[];
}
