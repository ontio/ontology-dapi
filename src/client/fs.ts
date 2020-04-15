import { Challenge, ChallengeList, FileHashList, FileInfo,
  FsNodeInfo, FsNodeInfoList, PdpRecordList, ReadPledge, Space } from '..';
import { FsAPI, FsSpaceAPI } from '../api/fs';
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

export const fsApi: FsAPI = {
  // node,
  space,
  getFileReadPledge(args) {
    return call<ReadPledge>('fs.getFileReadPledge', args);
  },
  // fileReadProfitSettle(args) {
  //   return call<string>('fs.fileReadProfitSettle');
  // },
  // verifyFileReadSettleSlice(args) {
  //   return call<boolean>('fs.verifyFileReadSettleSlice');
  // },
  getFilePdpRecordList(args) {
    return call<PdpRecordList>('fs.getFilePdpRecordList');
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
  // response(args) {
  //   return call<string>('fs.response');
  // },
  // judge(args) {
  //   return call<string>('fs.judge');
  // },
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
  }
  // genPassport(args) {
  //   return call<string>('fs.genPassport');
  // },
  // genFileReadSettleSlice(args) {
  //   return call<FileReadSettleSlice>('fs.genFileReadSettleSlice');
  // }
};
