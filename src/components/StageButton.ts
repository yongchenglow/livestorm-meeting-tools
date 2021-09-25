import { Stage } from '@livestorm/plugin';
import { ToolsModal } from './ToolsModal';

export async function StageButton() {
  const button = Stage.Buttons.registerStageButton({
    label: 'Meeting Tools',
    icon: 'Tools',
    imageSource:
      'https://www.pngjoy.com/pngl/205/4015861_tools-icon-tool-icon-white-png-hd-png.png',
    onClick: () => {
      ToolsModal();
    },
  });
}
