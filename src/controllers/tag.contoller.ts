import { Request, Response } from 'express';
import { TagRepository } from '../repository/tag.repository';
import { TagService } from '../services/tag.service';

export class TagController {
  static async getAllTag(req: Request, res: Response) {
    try {
      const tagService = new TagRepository(new TagService());
      const tags = await tagService.findAll();
      return res.status(200).json({
        data: tags,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async createTag(req: Request, res: Response) {
    try {
      const tagService = new TagRepository(new TagService());
      const tag = await tagService.create(req.body);
      return res.status(200).json({
        data: tag,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async deleteTag(req: Request, res: Response) {
    try {
      const { tag_id } = req.params;
      const tagService = new TagRepository(new TagService());
      const tag = await tagService.delete(tag_id);
      return res.status(200).json({
        data: tag,
        message: `tag ${tag.name} has been deleted`,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
