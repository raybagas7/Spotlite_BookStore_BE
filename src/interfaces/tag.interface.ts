export interface TagPayload {
  name: string;
}

export interface TagInterface {
  tag_id: string;
  name: string;
}

export interface TagRepositoryInterface {
  findAll(): Promise<TagInterface[]>;
  create(book: TagPayload): Promise<TagPayload>;
  delete(tag_id: string): Promise<TagInterface>;
}
