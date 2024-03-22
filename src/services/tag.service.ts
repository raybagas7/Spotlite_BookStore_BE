import {
  TagPayload,
  TagRepositoryInterface,
} from '../interfaces/tag.interface';

export class TagService implements TagRepositoryInterface {
  async findAll() {
    try {
      return 'a';
    } catch (error) {
      return error;
    }
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
