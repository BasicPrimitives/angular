import AbstractTemplate from './AbstractTemplate';

export class CheckBoxTemplate extends AbstractTemplate {
  constructor(selectCheckBoxLabel: string) {
    super("checkboxTemplate", { selectCheckBoxLabel });
  }
};
