import * as types from "./Types";
import * as pinService from "../services/PinService";

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

export const openModalSavePinAction = (pinId) => ({
  type: types.openModalSavePinType,
  payload: pinId,
});

export const openModalCreateFolderAction = () => ({
  type: types.openModalCreateFolderType,
});

export const closeModalAction = () => ({
  type: types.closeModalSaveType,
});

export const fetchFoldersInitAction = () => ({
  type: types.fetchFoldersInitType,
});

export const fetchFoldersSuccessAction = (folders) => ({
  type: types.fetchFoldersSuccessType,
  payload: folders,
});

export const fetchFoldersAction = async (dispatch) => {
  dispatch(fetchFoldersInitAction());
  const folders = await pinService.getFolders();
  dispatch(fetchFoldersSuccessAction(folders));
};

export const saveFoldersAction = async (dispatch, folderName, pinId) => {
  dispatch(saveFoldersInitAction());

  await sleep(1000);
  const newFolder = await pinService.saveFolder(folderName);
  const folder = await pinService.savePinInFolder(newFolder.id, pinId);
  dispatch(saveFoldersSuccessAction(folder));
};

export const saveFoldersInitAction = () => ({
  type: types.saveFoldersInitType,
});

export const saveFoldersSuccessAction = (folders) => ({
  type: types.saveFoldersSuccessType,
  payload: folders,
});

export const savePinInFolderAction = async (dispatch, pinId, folderId) => {
  dispatch(savePinInFoldersInitAction());

  await sleep(1000);

  await pinService.savePinInFolder(folderId, pinId);
  const folders = await pinService.getFolders();
  dispatch(savePinInFoldersSuccessAction(folders));
};

export const savePinInFoldersInitAction = () => ({
  type: types.savePinInFoldersInitType,
});

export const savePinInFoldersSuccessAction = (folders) => ({
  type: types.savePinInFoldersSuccessType,
  payload: folders,
});

export const fetchPinsAction = async (dispatch) => {
  dispatch(fetchPinsInitAction());
  const pinsData = await pinService.getPins();
  console.log(pinsData);
  dispatch(fetchPinsSuccessAction(pinsData));
};

export const fetchPinsInitAction = () => ({
  type: types.fetchPinsInitType,
});

export const fetchPinsSuccessAction = (pinsData) => ({
  type: types.fetchPinsSuccessType,
  payload: pinsData,
});
