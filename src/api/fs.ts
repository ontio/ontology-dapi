import {
    Challenge,
    ChallengeList,
    FileHashList,
    FileInfo,
    FileReadSettleSlice,
    FileRenew,
    FileStore,
    FileTransfer,
    FsNodeInfo,
    FsNodeInfoList,
    PdpRecordList,
    ReadPlan,
    ReadPledge,
    Space
} from './types';

export interface FsAPI {
  node: FsNodeAPI;
  space: FsSpaceAPI;
  getFileReadPledge({filehash, downloader}: {filehash: string, downloader: string}): Promise<ReadPledge>;
  fileReadProfitSettle({fileReadSettleSlice}: {fileReadSettleSlice: FileReadSettleSlice}): Promise<string>;
  verifyFileReadSettleSlice({settleSlice}: {settleSlice: FileReadSettleSlice}): Promise<boolean>;
  getFilePdpRecordList({fileHash}: {fileHash: string}): Promise<PdpRecordList>;
  /**
   * This api is actually the same with node.query, except that this is for client side query.
   * @param nodeWallet string
   */
  getNodeInfo({nodeWallet}: {nodeWallet: string}): Promise<FsNodeInfo>;
  GetNodeInfoList({count}: {count: number}): Promise<FsNodeInfoList>;
  chanllenge({fileHash, nodeAdd}: {fileHash: string, nodeAdd: string}): Promise<string>;
  getChallegen({fileHash, nodeAddr}: {fileHash: string, nodeAddr: string}): Promise<Challenge>;
  response({fileHash, proveData, blockHeight}:
    {fileHash: string, proveData: string, blockHeight: number}): Promise<string>;
  judge({fileHash, nodeAddr}: {fileHash: string, nodeAddr: string}): Promise<string>;
  getFileChallengeList({fileHash}: {fileHash: string}): Promise<ChallengeList>;
  getNodeChallengeList(): Promise<ChallengeList>;
  getFileList(): Promise<FileHashList>;
  getFileInfo({fileHash}: {fileHash: string}): Promise<FileInfo>;
  storeFiles({filesInfo}: {filesInfo: FileStore[]}): Promise<string>;
  transferFiles({fileTransfers}: {fileTransfers: FileTransfer[]}): Promise<string>;
  renewFiles({filesRenew}: {filesRenew: FileRenew[]}): Promise<string>;
  deleteFiles({fileHashes}: {fileHashes: string[]}): Promise<string>;
  fileReadPledge({fileHash, readPlans}: {fileHash: string, readPlans: ReadPlan[]}): Promise<string>;
  cancelFileRead({fileHash}: {fileHash: string}): Promise<string>;
  genPassport({height, blockHash}: {height: number, blockHash: string}): Promise<string>;
  genFileReadSettleSlice(
      {fileHash, payTo, sliceId, pledgeHeight}: {fileHash: string, payTo: string, sliceId: number, pledgeHeight: number}
  ): Promise<FileReadSettleSlice>;
  pollForTxConfirmed({timeout, txHash}: {timeout: number, txHash: string}): Promise<boolean>;
}

/**
 * Api for fs server node to invoke.
 */
export interface FsNodeAPI {
  register(
    {volume, minPdpInterval, nodeAddr}: {volume: number, minPdpInterval: number, nodeAddr: string}
  ): Promise<string>;
  query({nodeWallet}: {nodeWallet: string}): Promise<FsNodeInfo>;
  update(
    {volume, serviceTime, minPdpInterval, nodeNetAddr}
    : {volume: number, serviceTime: number, minPdpInterval: number, nodeNetAddr: string}
  ): Promise<string>;
  cancel(): Promise<string>;
  drawProfit(): Promise<string>;
  fileProve(
    {fileHash, proveData, blockHeight}: {fileHash: string, proveData: string, blockHeight: number}
  ): Promise<string>;
}

export interface FsSpaceAPI {
  create(
    {volume, copyNumber, pdpInterval, timeExpired}
    : {volume: number, copyNumber: number, pdpInterval: number, timeExpired: number}
  ): Promise<string>;
  get(): Promise<Space>;
  update({volume, timeExpired}: {volume: number, timeExpired: number}): Promise<string>;
  delete(): Promise<string>;
}
