import { PlayController } from "../../../contexts/player/application/PlayController";
import { Move } from "../../../contexts/player/domain/Move";
import { MoveInputView } from "../models/MoveInputView";
import { Strings } from "../models/Strings";
import { CheckersCommand } from "./Command";

export class MoveCommand extends CheckersCommand<PlayController> {
  constructor(playController: PlayController) {
    super(Strings.Move, playController);
  }

  execute() {
    let move: Move = new MoveInputView(this.acceptorController).getMove();
    this.acceptorController.executeMove(move);
  }

  isActive(): boolean {
    return true;
  }
}
