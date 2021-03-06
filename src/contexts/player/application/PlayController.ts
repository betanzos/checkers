import { Color } from "../domain/Color";
import { Move } from "../domain/Move";
import { Player } from "../domain/player/Player";
import { PlayerType } from "../domain/player/PlayerType";
import { Session } from "../domain/Session";
import { Token } from "../domain/Token";
import { Coordinate } from "../_shared/Coordinate";
import { IAcceptorController } from "./IAcceptorController";
import { IControllerVisitor } from "./IControllerVisitor";
import { MoveController } from "./MoveController";
import { RedoController } from "./RedoController";
import { UndoController } from "./UndoController";

export class PlayController implements IAcceptorController {

  private readonly moveController: MoveController;
  private readonly undoController: UndoController;
  private readonly redoController: RedoController;
  constructor(session: Session) {
    this.moveController = new MoveController(session);
    this.undoController = new UndoController(session);
    this.redoController = new RedoController(session);
  }
  accept(visitor: IControllerVisitor) {
    visitor.visitPlayController(this);
  }
  goNextState() {
    this.moveController.goNextState();
  }
  isGameOver(): boolean {
    return this.moveController.isGameOver();
  }
  getToken(coordinate: Coordinate): Token {
    return this.moveController.getToken(coordinate);
  }
  isEmpty(coordinate: Coordinate): boolean {
    return this.moveController.isEmpty(coordinate);
  }
  getBoardSize(): number {
    return this.moveController.getBoardSize();
  }
  getBoardColor(coordinate: Coordinate): Color {
    return this.moveController.getBoardColor(coordinate);
  }
  getCurrentPlayerId(): string {
    return this.moveController.getCurrentPlayerId();
  }
  getCurrentPlayer(): Player {
    return this.moveController.getCurrentPlayer();
  }
  getCurrentPlayerType(): PlayerType {
    return this.moveController.getCurrentPlayerType();
  }
  isValidMove(move: Move): boolean {
    return this.moveController.isValidMove(move);
  }
  isCaptureMove(move: Move): boolean {
    return this.moveController.isCaptureMove(move);
  }
  executeMove(move?: Move) {
    this.moveController.executeMove(move);
  }
  isUndoable(): boolean {
    return this.undoController.isUndoable();
  }
  undo() {
    this.undoController.undo();
  }
  isRedoable(): boolean {
    return this.redoController.isRedoable();
  }
  redo() {
    this.redoController.redo();
  }
}
