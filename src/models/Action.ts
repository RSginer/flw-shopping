export interface IAction {
  type: string;
  payload: any;
}

export class Action {
  type: string;
  payload?: any;

  constructor(type: string, payload?: any) {
    this.type = type;
    this.payload = payload;
  }
}
