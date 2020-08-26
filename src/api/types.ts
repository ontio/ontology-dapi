export type NetworkType = 'MAIN' | 'TEST' | 'PRIVATE';

export type Asset = 'ONT' | 'ONG' | string;

export enum TransactionType {
  BookKeeper = 2,
  Claim = 3,
  Deploy = 208,
  Invoke = 209,
  Enrollment = 4,
  Vote = 5
}

export enum VmType  {
    NEOVM_TYPE = 1,
    WASMVM_TYPE = 3
}

export type EventListener = (data: any) => void;

// tslint:disable-next-line:max-line-length
export type ParameterType = 'Boolean' | 'Integer' | 'ByteArray' | 'Struct' | 'Map' | 'String' | 'Array' | 'Address' | 'Long';

export interface Parameter {
  type: ParameterType;
  value: any;
}

export interface BlockHeader {
  Version: number;
  PrevBlockHash: string;
  TransactionsRoot: string;
  BlockRoot: string;
  Timestamp: number;
  Height: number;
  ConsensusData: number;
  ConsensusPayload: string;
  NextBookkeeper: string;
  Bookkeepers: string[];
  SigData: string[];
  Hash: string;
}

export interface Block {
  Hash: string;
  Size: number;
  Header: BlockHeader;
  Transactions: Transaction[];
}

export interface TxSignature {
  PubKeys: string[];
  M: number;
  SigData: string[];
}

export interface Transaction {
  Version: number;
  Nonce: number;
  GasPrice: number;
  GasLimit: number;
  Payer: string;
  TxType: TransactionType;
  Payload: any;
  Attributes: any[];
  Sigs: TxSignature[];
  Hash: string;
  Height: number;
}

export interface MerkleProof {
  Type: string;
  TransactionsRoot: string;
  BlockHeight: number;
  CurBlockRoot: string;
  CurBlockHeight: number;
  TargetHashes: string[];
}

export interface Balance {
  ONT: string;
  ONG: string;

  [key: string]: string;
}

export interface OntIdAttribute {
  key: string;
  type: string;
  value: string;
}

export interface OntIdDDO {
  attributes: OntIdAttribute[];
}

export interface Provider {
  name: string;
  version: string;
  compatibility: string[];
}

export interface Network {
  type: NetworkType;
  address: string;
}

export type Result = string[];

export interface Response {
  transaction: string;
  results: Result[];
}

export interface Signature {
  publicKey: string;
  data: string;
}

export interface Contract {
  Code: string;
  NeedStorage: boolean;
  Name: string;
  CodeVersion: string;
  Author: string;
  Email: string;
  Description: string;
}

export interface BlockWithTxList {
  Hash: string;
  Height: number;
  Transactions: string[];
}

export interface GasPrice {
  gasPrice: number;
  height: number;
}

export interface FsNodeInfo {
  pledge: number;
  profit: number;
  volume: number;
  restVol: number;
  serviceTime: Date;
  nodeAddr: string;
  nodeNetAddr: string;
}

export interface FsNodeInfoList {
  nodesInfo: FsNodeInfo[];
}

export interface ReadPlan {
  nodeAddr: string;
  maxReadBlockNum: number;
  haveReadBlockNum: number;
  numOfSettlements: number;
}

export interface ReadPledge {
  fileHash: string;
  downloader: string;
  restMoney: number;
  readPlans: ReadPlan[];
}

export interface FileReadSettleSlice {
  fileHash: string;
  payFrom: string;
  payTo: string;
  sliceId: number;
  pledgeHeight: number;
  signature: string;
  publicKey: string;
}

export interface PdpRecord {
  nodeAddr: string;
  fileHash: string;
  fileOwner: string;
  lastPdpTime: Date;
  settleFlag: boolean;
}

export interface PdpRecordList {
  pdpRecords: PdpRecord[];
}

export interface Challenge {
  fileHash: string;
  fileOwner: string;
  nodeAddr: string;
  challengeHeight: number;
  reward: number;
  expiredTime: Date;
  state: number;
}

export interface ChallengeList {
  challenges: Challenge[];
}

export interface Space {
  spaceOwner: string;
  volume: number;
  restVol: number;
  copyNumber: number;
  payAmount: number;
  restAmount: number;
  timeStart: Date;
  timeExpired: Date;
  validFlag: boolean;
}

export interface FileHash {
  fHash: string;
}

export interface FileHashList {
  filesH: FileHash[];
}

export interface FileInfo {
  fileHash: string;
  fileOwner: string;
  fileDesc: string;
  fileBlockCount: number;
  realFileSize: number;
  copyNumber: number;
  payAmount: number;
  restAmount: number;
  firstPdp: boolean;
  timeStart: Date;
  timeExpired: Date;
  beginHeight: number;
  expiredHeight: number;
  pdpParam: string;
  validFlag: boolean;
  storageType: number;
}

export interface FileInfoList {
  filesI: FileInfo[];
}

export interface FileStore {
  fileHash: string;
  fileDesc: string;
  fileBlockCount: number;
  realFileSize: number;
  copyNumber: number;
  firstPdp: boolean;
  timeStart: Date;
  timeExpired: Date;
  pdpParam: string;
  storageType: number;
}

export interface FileRenew {
  fileHash: string;
  renewTime: Date;
}

export interface FileTransfer {
  fileHash: string;
  newOwner: string;
}
