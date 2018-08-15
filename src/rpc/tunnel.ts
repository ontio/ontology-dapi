export type CallbackType = (msg: Request) => Promise<Response> | void;
export type PostMessageType = (msg: Request) => Promise<Response>;

export type AddListenerType = (callback: CallbackType) => void;

export type MessageHandlerType = (msg: any) => any;

export interface Request {
  payload: any;
  source: string;
  destination: string;
  type: 'dAPI.js';
}

export interface Response<TYPE = any> {
  destination: string;
  error?: any;
  payload?: TYPE;
  source: string;
  type: 'dAPI.js';
}

export interface TunnelOptions {
  source: string;
  destination: string;
  postMessage?: PostMessageType;
  addListener?: AddListenerType;
  messageHandler?: MessageHandlerType;
}

export class Tunnel<T = any> {
  private source: string;
  private destination: string;
  private postMessage?: PostMessageType;
  private messageHandler?: MessageHandlerType;

  constructor(options: TunnelOptions) {
    this.source = options.source;
    this.destination = options.destination;
    this.postMessage = options.postMessage;
    this.messageHandler = options.messageHandler;

    if (options.addListener === undefined && options.postMessage === undefined) {
      throw new Error('Either addListener or postMessage must be present.');
    } else if (options.addListener !== undefined) {
      if (options.messageHandler === undefined) {
        throw new Error('MessageHandler must be specified if addListener present.');
      }

      options.addListener(this.onMessage.bind(this));
    }
  }

  async send<RESULT>(msg: T): Promise<RESULT> {
    const request: Request = {
      destination: this.destination,
      payload: msg,
      source: this.source,
      type: 'dAPI.js'
    };

    if (this.postMessage === undefined) {
      throw new Error('PostMessage was not specified.');
    }

    const response: Response<RESULT> = await this.postMessage(request);

    if (response.error !== undefined) {
      throw new Error(response.error);
    } else {
      return response.payload as RESULT;
    }
  }

  private onMessage(request: Request): Promise<Response> | void {
    if (request.destination === this.source) {
      let promise: Promise<any>;

      try {
        if (this.messageHandler === undefined) {
          throw new Error('MessageHandler was not specified.');
        }

        const response = this.messageHandler(request.payload);
        promise = Promise.resolve(response);
      } catch (e) {
        promise = Promise.reject(e);
      }

      return promise
        .then(
          (result) =>
            ({
              destination: request.source,
              payload: result,
              source: request.destination,
              type: 'dAPI.js'
            } as Response)
        )
        .catch(
          (error) =>
            ({
              destination: request.source,
              error,
              source: request.destination,
              type: 'dAPI.js'
            } as Response)
        );
    }
  }
}
