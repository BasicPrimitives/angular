import AbstractTemplate from './AbstractTemplate';

export class LevelTitleTemplate extends AbstractTemplate {
  constructor(options: Object, orientation: any) {
    super("levelTitleTemplate", {
      ...options,
      orientation
    });
  }
};