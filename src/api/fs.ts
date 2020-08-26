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
    Response,
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
  fileReadProfitSettle({fileReadSettleSlice, gasPrice, gasLimit }:
    {fileReadSettleSlice: FileReadSettleSlice, gasPrice?: number, gasLimit?: number}): Promise<Response>;

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
  chanllenge({fileHash, nodeAddr, gasPrice, gasLimit}:
    {fileHash: string, nodeAddr: string, gasPrice?: number, gasLimit?: number}): Promise<Response>;

  /**
   * Get challenge for some file from some node
   * @param fileHash File hash hex
   * @param nodeAddr node wallet address
   */
  getChallenge({fileHash, nodeAddr}: {fileHash: string, nodeAddr: string}): Promise<Challenge>;

  /**
   * Response from ontfs server to challenge from clients
   * @param fileHash File hash of the response
   * @param proveData prove data
   * @param blockHeight block height of the file
   */
  response({fileHash, proveData, blockHeight, gasPrice, gasLimit}:
    {
      fileHash: string, proveData: string, blockHeight: number,
      gasPrice?: number, gasLimit?: number
    }): Promise<Response>;

  /**
   * Client could judge if server haven't responsed to client's challenge for a period,
   * in which case it may cause the server node to be punished
   * @param fileHash file hash in the challenge
   * @param nodeAddr node address
   */
  judge({fileHash, nodeAddr, gasPrice, gasLimit}:
    {fileHash: string, nodeAddr: string, gasPrice?: number, gasLimit?: number}): Promise<Response>;

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
  storeFiles({filesInfo, gasPrice, gasLimit }:
    {filesInfo: FileStore[], gasPrice?: number, gasLimit?: number }): Promise<Response>;

  /**
   * Transfer file to new owner
   * @param fileTransfers file transfer detail
   */
  transferFiles({fileTransfers, gasPrice, gasLimit }:
    {fileTransfers: FileTransfer[], gasPrice?: number, gasLimit?: number}): Promise<Response>;

  /**
   * Renew File Info
   * @param filesRenew file info to be updated to
   */
  renewFiles({filesRenew, gasPrice, gasLimit }:
    {filesRenew: FileRenew[], gasPrice?: number, gasLimit?: number}): Promise<Response>;

  /**
   * delete files in batch
   * @param fileHashes File Hash array
   */
  deleteFiles({fileHashes, gasPrice, gasLimit }:
    {fileHashes: string[], gasPrice?: number, gasLimit?: number}): Promise<Response>;

  /**
   * Get File Read Pledge
   * @param fileHash file hash of the file that you want to read and download
   * @param readPlans Read plans
   */
  fileReadPledge({fileHash, readPlans, gasPrice, gasLimit}:
    {fileHash: string, readPlans: ReadPlan[], gasPrice?: number, gasLimit?: number}): Promise<Response>;

  /**
   * Cancel File Read
   * @param fileHash fileHash that you want to cancel read
   */
  cancelFileRead({fileHash, gasPrice, gasLimit}:
    {fileHash: string, gasPrice?: number, gasLimit?: number}): Promise<Response>;
  // genPassport(): Promise<string>;

  /**
   * generate file read settle slice whild downloading, it needs user's signature
   * @param fileHash file hash of the settle slice
   * @param payTo the node address to pay to
   * @param sliceId slice id of the file slice
   * @param pledgeHeight Pledge height
   */
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
   * @param serviceTime Service time deadline (Date)
   * @param nodeNetAddr Fs Server Node network address, e.g. https://10.0.0.1:30335
   */
  register(
    {volume, serviceTime, nodeNetAddr, gasPrice, gasLimit}
    : {volume: number, serviceTime: Date, nodeNetAddr: string,
      gasPrice?: number, gasLimit?: number}
  ): Promise<Response>;

  /**
   * Query node by wallet address
   * @param nodeWallet target node wallet address
   */
  query({nodeWallet}: {nodeWallet: string}): Promise<FsNodeInfo>;

  /**
   * Update Info of FS server node
   * @param volume FS server volume (KB)
   * @param serviceTime Service time deadline (Date)
   * @param nodeNetAddr Fs Server Node network address, e.g. https://10.0.0.1:30335
   */
  update(
    {volume, serviceTime, nodeNetAddr, gasPrice, gasLimit}
    : {volume: number, serviceTime: Date, nodeNetAddr: string,
      gasPrice?: number, gasLimit?: number}
  ): Promise<Response>;

  /**
   * Cancel Node Register
   */
  cancel({gasPrice, gasLimit}: {gasPrice?: number, gasLimit?: number}): Promise<Response>;

  /**
   * Node draw profit
   */
  drawProfit({gasPrice, gasLimit}: {gasPrice?: number, gasLimit?: number}): Promise<Response>;

  /**
   * For node prove that it has some file
   * @param fileHash file hash in Hex
   * @param proveData prove data in Hex
   * @param blockHeight Next Pdp interval beginning block height
   */
  fileProve(
    {fileHash, proveData, blockHeight, gasPrice, gasLimit}:
    {fileHash: string, proveData: string, blockHeight: number, gasPrice?: number, gasLimit?: number}
  ): Promise<Response>;
}

export interface FsSpaceAPI {
  /**
   * User Create Space
   * @param volume space volume (KB)
   * @param copyNumber Copy number of files stored in this space,
   *    thus all files in same space will have same copy number.
   * @param timeStart space start time
   * @param timeExpired space expire time
   */
  create(
    {volume, copyNumber, timeStart, timeExpired, gasPrice, gasLimit}
    : {volume: number, copyNumber: number, timeStart: Date, timeExpired: Date, gasPrice?: number, gasLimit?: number}
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
  update({volume, timeExpired, gasPrice, gasLimit}:
    {volume: number, timeExpired: Date, gasPrice?: number, gasLimit?: number}): Promise<Response>;

  /**
   * Delete user space
   */
  delete({gasPrice, gasLimit}: {gasPrice?: number, gasLimit?: number}): Promise<Response>;
}
