import * as cache from 'memory-cache';
import {
  TagPayload,
  TagRepositoryInterface,
} from '../interfaces/tag.interface';
import { AppDataSource } from '../data-source';
import { Tag } from '../entity/Tag.entity';

export class TagService implements TagRepositoryInterface {
  async findAll() {
    const data = cache.get('tags');
    if (data) {
      console.log('serve tags from cache');
      return data;
    }

    console.log('serve tags from db');
    const tagRepository = AppDataSource.getRepository(Tag);
    const tags = await tagRepository.find();
    console.log(tags);

    cache.put('tags', tags, 10000);
    return tags;
  }

  async create(tag: TagPayload) {
    const { name } = tag;
    const tagData = new Tag();
    tagData.name = name;

    const tagRepository = AppDataSource.getRepository(Tag);
    const data = await tagRepository.save(tagData);
    return data;
  }

  async delete(tag_id: string) {
    try {
      const tagRepository = AppDataSource.getRepository(Tag);
      const tag = await tagRepository.findOne({
        where: { tag_id },
      });
      const res = await tagRepository.remove(tag);
      return res;
    } catch (error) {
      return error;
    }
  }
}
