import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tags' })
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  tag_id: string;

  @Column({ nullable: false })
  name: string;
}
