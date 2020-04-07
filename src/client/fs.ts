import { Challenge, ChallengeList, FileHashList, FileInfo,
    FileReadSettleSlice, FsNodeInfo, FsNodeInfoList,
    PdpRecordList, ReadPledge, Space } from '../api';
import { FsAPI, FsNodeAPI, FsSpaceAPI } from '../api/fs';
import { call } from './proxy';

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

export const fsApi: FsAPI = {
  node,
  space,
  getFileReadPledge(args) {
    return call<ReadPledge>('fs.getFileReadPledge', args);
  },
  fileReadProfitSettle(args) {
    return call<string>('fs.fileReadProfitSettle');
  },
  verifyFileReadSettleSlice(args) {
    return call<boolean>('fs.verifyFileReadSettleSlice');
  },
  getFilePdpRecordList(args) {
    return call<PdpRecordList>('fs.getFilePdpRecordList');
  },
  /**
   * This api is actually the same with node.query, except that this is for client side query.
   * @param nodeWallet string
   */
  getNodeInfo(args) {
    return call<FsNodeInfo>('fs.getNodeInfo');
  },
  GetNodeInfoList(args) {
    return call<FsNodeInfoList>('fs.GetNodeInfoList');
  },
  chanllenge(args) {
    return call<string>('fs.chanllenge');
  },
  getChallegen(args) {
    return call<Challenge>('fs.getChallegen');
  },
  response(args) {
    return call<string>('fs.response');
  },
  judge(args) {
    return call<string>('fs.judge');
  },
  getFileChallengeList(args) {
    return call<ChallengeList>('fs.getFileChallengeList');
  },
  getNodeChallengeList() {
    return call<ChallengeList>('fs.getNodeChallengeList');
  },
  getFileList() {
    return call<FileHashList>('fs.getFileList');
  },
  getFileInfo(args) {
    return call<FileInfo>('fs.getFileInfo');
  },
  storeFiles(args) {
    return call<string>('fs.storeFiles');
  },
  transferFiles(args) {
    return call<string>('fs.transferFiles');
  },
  renewFiles(args) {
    return call<string>('fs.renewFiles');
  },
  deleteFiles(args) {
    return call<string>('fs.deleteFiles');
  },
  fileReadPledge(args) {
    return call<string>('fs.fileReadPledge');
  },
  cancelFileRead(args) {
    return call<string>('fs.cancelFileRead');
  },
  genPassport(args) {
    return call<string>('fs.genPassport');
  },
  genFileReadSettleSlice(args) {
    return call<FileReadSettleSlice>('fs.genFileReadSettleSlice');
  },
  pollForTxConfirmed(args) {
    return call<boolean>('fs.pollForTxConfirmed');
  }
};
