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
  getFileReadPledge({fileHash, downloader}: {fileHash: string, downloader: string}): Promise<ReadPledge>;
  fileReadProfitSettle({fileReadSettleSlice}: {fileReadSettleSlice: FileReadSettleSlice}): Promise<Response>;
  verifyFileReadSettleSlice({settleSlice}: {settleSlice: FileReadSettleSlice}): Promise<boolean>;
  getFilePdpRecordList({fileHash}: {fileHash: string}): Promise<PdpRecordList>;
  /**
   * This api is actually the same with node.query, except that this is for client side query.
   * @param nodeWallet string
   */
  getNodeInfo({nodeWallet}: {nodeWallet: string}): Promise<FsNodeInfo>;
  getNodeInfoList({count}: {count: number}): Promise<FsNodeInfoList>;
  chanllenge({fileHash, nodeAddr}: {fileHash: string, nodeAddr: string}): Promise<Response>;
  getChallenge({fileHash, nodeAddr}: {fileHash: string, nodeAddr: string}): Promise<Challenge>;
  response({fileHash, proveData, blockHeight}:
    {fileHash: string, proveData: string, blockHeight: number}): Promise<Response>;
  judge({fileHash, nodeAddr}: {fileHash: string, nodeAddr: string}): Promise<Response>;
  getFileChallengeList({fileHash}: {fileHash: string}): Promise<ChallengeList>;
  getNodeChallengeList(): Promise<ChallengeList>;
  getFileList(): Promise<FileHashList>;
  getFileInfo({fileHash}: {fileHash: string}): Promise<FileInfo>;
  storeFiles({filesInfo}: {filesInfo: FileStore[]}): Promise<Response>;
  transferFiles({fileTransfers}: {fileTransfers: FileTransfer[]}): Promise<Response>;
  renewFiles({filesRenew}: {filesRenew: FileRenew[]}): Promise<Response>;
  deleteFiles({fileHashes}: {fileHashes: string[]}): Promise<Response>;
  fileReadPledge({fileHash, readPlans}: {fileHash: string, readPlans: ReadPlan[]}): Promise<Response>;
  cancelFileRead({fileHash}: {fileHash: string}): Promise<Response>;
  // genPassport(): Promise<string>;
  genFileReadSettleSlice(
      {fileHash, payTo, sliceId, pledgeHeight}: {fileHash: string, payTo: string, sliceId: number, pledgeHeight: number}
  ): Promise<FileReadSettleSlice>;
}

/**
 * Api for fs server node to invoke.
 */
export interface FsNodeAPI {
  register(
    {volume, minPdpInterval, serviceTime, nodeNetAddr}
    : {volume: number, serviceTime: number, minPdpInterval: number, nodeNetAddr: string}
  ): Promise<Response>;
  query({nodeWallet}: {nodeWallet: string}): Promise<FsNodeInfo>;
  update(
    {volume, serviceTime, minPdpInterval, nodeNetAddr}
    : {volume: number, serviceTime: number, minPdpInterval: number, nodeNetAddr: string}
  ): Promise<Response>;
  cancel(): Promise<Response>;
  drawProfit(): Promise<Response>;
  fileProve(
    {fileHash, proveData, blockHeight}: {fileHash: string, proveData: string, blockHeight: number}
  ): Promise<Response>;
}

export interface FsSpaceAPI {
  create(
    {volume, copyNumber, pdpInterval, timeExpired}
    : {volume: number, copyNumber: number, pdpInterval: number, timeExpired: number}
  ): Promise<Response>;
  get(): Promise<Space>;
  update({volume, timeExpired}: {volume: number, timeExpired: number}): Promise<Response>;
  delete(): Promise<Response>;
}
