import { OrientationType, TextOrientationType } from '../../enums';
import AbstractTemplate from './AbstractTemplate';

export class LevelTitleTemplate extends AbstractTemplate {
  constructor(options: any, orientation: any) {
    var levelTitleOrientation: TextOrientationType = options.levelTitleOrientation;
    if(options.levelTitleOrientation == TextOrientationType.Auto) {
      switch (orientation) {
        case OrientationType.Top:
          levelTitleOrientation = TextOrientationType.RotateRight;
          break;
        case OrientationType.Bottom:
          levelTitleOrientation = TextOrientationType.RotateRight;
          break;
        default:
          break;
      }
    }
    super("levelTitleTemplate", {
      ...options,
      orientation,
      levelTitleOrientation
    });
  }
};