import {
  TagPayload,
  TagRepositoryInterface,
} from '../interfaces/tag.interface';

export class TagRepository {
  constructor(private tagRepository: TagRepositoryInterface) {}
  async findAll() {
    return await this.tagRepository.findAll();
  }

  async create(tag: TagPayload) {
    return await this.tagRepository.create(tag);
  }

  async delete(tag_id: string) {
    return await this.tagRepository.delete(tag_id);
  }
}
