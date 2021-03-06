import { PlayController } from "../../../contexts/player/application/PlayController";
import { ConsoleView } from "./ConsoleView";

export abstract class PlayerView extends ConsoleView {
  constructor(protected controller: PlayController) {
    super();
  }
  abstract executeNextMove(): void;
}
