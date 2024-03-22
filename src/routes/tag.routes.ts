import * as express from 'express';
import { authentification } from '../middleware/auth.middleware';
import { authorization } from '../middleware/authorization';
import { TagController } from '../controllers/tag.contoller';

const Router = express.Router();

Router.get('/tags', TagController.getAllTag);

Router.post(
  '/tags',
  authentification,
  authorization(['admin']),
  TagController.createTag
);

Router.delete(
  '/tags/:tag_id',
  authentification,
  authorization(['admin']),
  TagController.deleteTag
);
export { Router as tagRouter };
