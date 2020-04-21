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
  /**
   * Node related API
   */
  node: FsNodeAPI;

  /**
   * Space Related API
   */
  space: FsSpaceAPI;

  /**
   * Get file download read pledge
   * @param fileHash Hash hex of file to download
   * @param downloader Downloader address
   */
  getFileReadPledge({fileHash, downloader}: {fileHash: string, downloader: string}): Promise<ReadPledge>;

  /**
   * Settle file read profit
   * @param fileReadSettleSlice
   */
  fileReadProfitSettle({fileReadSettleSlice}: {fileReadSettleSlice: FileReadSettleSlice}): Promise<Response>;

  /**
   * Verify file read settle slice
   * @param settleSlice
   */
  verifyFileReadSettleSlice({settleSlice}: {settleSlice: FileReadSettleSlice}): Promise<boolean>;

  /**
   * Get file pdp record list
   * @param fileHash Hash hex of file to gete pdp records
   */
  getFilePdpRecordList({fileHash}: {fileHash: string}): Promise<PdpRecordList>;

  /**
   * This api is actually the same with node.query, except that this is for client side query.
   * @param nodeWallet node wallet address
   */
  getNodeInfo({nodeWallet}: {nodeWallet: string}): Promise<FsNodeInfo>;

  /**
   * Get nodes in network
   * @param count maximum nodes number to show.
   */
  getNodeInfoList({count}: {count: number}): Promise<FsNodeInfoList>;

  /**
   * Challenge file prove from node address
   * @param fileHash File hash hex
   * @param nodeAddr Fs node wallet address
   */
  chanllenge({fileHash, nodeAddr}: {fileHash: string, nodeAddr: string}): Promise<Response>;

  /**
   * Get challenge for some file from some node
   * @param fileHash File hash hex
   * @param nodeAddr node wallet address
   */
  getChallenge({fileHash, nodeAddr}: {fileHash: string, nodeAddr: string}): Promise<Challenge>;

  response({fileHash, proveData, blockHeight}:
    {fileHash: string, proveData: string, blockHeight: number}): Promise<Response>;

  judge({fileHash, nodeAddr}: {fileHash: string, nodeAddr: string}): Promise<Response>;

  /**
   * Get challenge list for certain file
   * @param fileHash File hash hex
   */
  getFileChallengeList({fileHash}: {fileHash: string}): Promise<ChallengeList>;

  /**
   * Get current node challenge list
   */
  getNodeChallengeList(): Promise<ChallengeList>;

  /**
   * Get file list.
   */
  getFileList(): Promise<FileHashList>;

  /**
   * Get file info
   * @param fileHash file hash hex
   */
  getFileInfo({fileHash}: {fileHash: string}): Promise<FileInfo>;

  /**
   * Store files
   * @param filesInfo info of files to store
   */
  storeFiles({filesInfo}: {filesInfo: FileStore[]}): Promise<Response>;

  /**
   * Transfer file to new owner
   * @param fileTransfers file transfer detail
   */
  transferFiles({fileTransfers}: {fileTransfers: FileTransfer[]}): Promise<Response>;

  /**
   * @param filesRenew
   */
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
  /**
   * Register a FS server node
   * @param volume FS server volume (KB)
   * @param minPdpInterval the minimal pdp interval request to the file uploaded (Sec.)
   * @param serviceTime Service time deadline (Date)
   * @param nodeNetAddr Fs Server Node network address, e.g. https://10.0.0.1:30335
   */
  register(
    {volume, minPdpInterval, serviceTime, nodeNetAddr}
    : {volume: number, serviceTime: Date, minPdpInterval: number, nodeNetAddr: string}
  ): Promise<Response>;

  /**
   * Query node by wallet address
   * @param nodeWallet target node wallet address
   */
  query({nodeWallet}: {nodeWallet: string}): Promise<FsNodeInfo>;

  /**
   * Update Info of FS server node
   * @param volume FS server volume (KB)
   * @param minPdpInterval the minimal pdp interval request to the file uploaded (Sec.)
   * @param serviceTime Service time deadline (Date)
   * @param nodeNetAddr Fs Server Node network address, e.g. https://10.0.0.1:30335
   */
  update(
    {volume, serviceTime, minPdpInterval, nodeNetAddr}
    : {volume: number, serviceTime: Date, minPdpInterval: number, nodeNetAddr: string}
  ): Promise<Response>;

  /**
   * Cancel Node Register
   */
  cancel(): Promise<Response>;

  /**
   * Node draw profit
   */
  drawProfit(): Promise<Response>;

  /**
   * For node prove that it has some file
   * @param fileHash file hash in Hex
   * @param proveData prove data in Hex
   * @param blockHeight Next Pdp interval beginning block height
   */
  fileProve(
    {fileHash, proveData, blockHeight}: {fileHash: string, proveData: string, blockHeight: number}
  ): Promise<Response>;
}

export interface FsSpaceAPI {
  /**
   * User Create Space
   * @param volume space volume (KB)
   * @param copyNumber Copy number of files stored in this space,
   *    thus all files in same space will have same copy number.
   * @param pdpInterval Pdp Interval of space to create
   * @param timeExpired space expire time
   */
  create(
    {volume, copyNumber, pdpInterval, timeExpired}
    : {volume: number, copyNumber: number, pdpInterval: number, timeExpired: Date}
  ): Promise<Response>;

  /**
   * Get user space
   */
  get(): Promise<Space>;

  /**
   * Update space
   * @param volume space volume. (KB)
   * @param timeExpired space expire time
   */
  update({volume, timeExpired}: {volume: number, timeExpired: Date}): Promise<Response>;

  /**
   * Delete user space
   */
  delete(): Promise<Response>;
}
