import { Challenge, ChallengeList, FileHashList, FileInfo,
  FileReadSettleSlice, FsNodeInfo, FsNodeInfoList, PdpRecordList, ReadPledge, Space } from '..';
import { FsAPI, FsNodeAPI, FsSpaceAPI } from '../api/fs';
import { call } from './proxy';

const space: FsSpaceAPI = {
  create(args) {
    return call<string>('fs.space.create', args);
  },
  get() {
    return call<Space>('fs.space.get');
  },
  update(args) {
    return call<string>('fs.space.update', args);
  },
  delete() {
    return call<string>('fs.space.delete');
  }
};

const node: FsNodeAPI = {
  register(args) {
    return call<string>('fs.node.register', args);
  },
  query(args) {
    return call<FsNodeInfo>('fs.node.query', args);
  },
  update(args) {
    return call<string>('fs.node.update', args);
  },
  cancel() {
    return call<string>('fs.node.cancel');
  },
  drawProfit() {
    return call<string>('fs.node.drawProfit');
  },
  fileProve(args) {
    return call<string>('fs.node.fileProve', args);
  }
};

export const fsApi: FsAPI = {
  node,
  space,
  getFileReadPledge(args) {
    return call<ReadPledge>('fs.getFileReadPledge', args);
  },
  fileReadProfitSettle(args) {
    return call<string>('fs.fileReadProfitSettle', args);
  },
  verifyFileReadSettleSlice(args) {
    return call<boolean>('fs.verifyFileReadSettleSlice', args);
  },
  getFilePdpRecordList(args) {
    return call<PdpRecordList>('fs.getFilePdpRecordList', args);
  },
  /**
   * This api is actually the same with node.query, except that this is for client side query.
   * @param nodeWallet string
   */
  getNodeInfo(args) {
    return call<FsNodeInfo>('fs.getNodeInfo', args);
  },
  getNodeInfoList(args) {
    return call<FsNodeInfoList>('fs.GetNodeInfoList', args);
  },
  chanllenge(args) {
    return call<string>('fs.chanllenge', args);
  },
  getChallenge(args) {
    return call<Challenge>('fs.getChallenge', args);
  },
  response(args) {
    return call<string>('fs.response', args);
  },
  judge(args) {
    return call<string>('fs.judge', args);
  },
  getFileChallengeList(args) {
    return call<ChallengeList>('fs.getFileChallengeList', args);
  },
  getNodeChallengeList() {
    return call<ChallengeList>('fs.getNodeChallengeList');
  },
  getFileList() {
    return call<FileHashList>('fs.getFileList');
  },
  getFileInfo(args) {
    return call<FileInfo>('fs.getFileInfo', args);
  },
  storeFiles(args) {
    return call<string>('fs.storeFiles', args);
  },
  transferFiles(args) {
    return call<string>('fs.transferFiles', args);
  },
  renewFiles(args) {
    return call<string>('fs.renewFiles', args);
  },
  deleteFiles(args) {
    return call<string>('fs.deleteFiles', args);
  },
  fileReadPledge(args) {
    return call<string>('fs.fileReadPledge', args);
  },
  cancelFileRead(args) {
    return call<string>('fs.cancelFileRead', args);
  },
  // genPassport() {
  //   return call<string>('fs.genPassport');
  // }
  genFileReadSettleSlice(args) {
    return call<FileReadSettleSlice>('fs.genFileReadSettleSlice', args);
  }
};
