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

  async create(book: TagPayload) {
    try {
      return 'a';
    } catch (error) {
      return error;
    }
  }

  async delete(tag_id: string) {
    try {
      return 'a';
    } catch (error) {
      return error;
    }
  }
}
