import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Orphanage from './Orphanage';

@Entity('images')

export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number; 
    
    @Column()
    path: string; 
    
    // outra forma de fazer o relacionamento, nao precisando inserir o id da chave estrangeira
   
    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id'})
    orphanage: Orphanage;

}