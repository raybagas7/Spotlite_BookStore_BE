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
    } catch (error) {}
  }

  static async deleteTag(req: Request, res: Response) {
    try {
    } catch (error) {}
  }
}
