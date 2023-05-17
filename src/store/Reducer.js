import * as types from "./Types";

export function Reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case types.openModalSavePinType:
      return {
        ...state,
        mode: "savePin",
        type: types.openModalSavePinType,
        activePinId: action.payload,
      };

    case types.closeModalSaveType:
      return {
        ...state,
        type: types.closeModalSaveType,
        mode: null,
      };

    case types.fetchFoldersInitType:
      return {
        ...state,
        type: types.fetchFoldersInitType,
      };

    case types.fetchFoldersSuccessType:
      return {
        ...state,
        type: types.fetchFoldersSuccessType,
        folders: action.payload,
      };

    case types.openModalCreateFolderType:
      return {
        ...state,
        type: types.openModalCreateFolderType,
        mode: "createFolder",
      };

    case types.saveFoldersType:
      return {
        ...state,
        type: types.saveFoldersType,
      };

    case types.saveFoldersInitType:
      return {
        ...state,
        type: types.saveFoldersInitType,
      };

    case types.saveFoldersSuccessType:
      return {
        ...state,
        type: types.saveFoldersSuccessType,
        folders: [...state.folders, action.payload],
      };

    case types.savePinInFoldersSuccessType:
      return {
        ...state,
        type: types.savePinInFoldersSuccessType,
        folders: action.payload,
      };

    case types.fetchPinsSuccessType:
      return {
        ...state,
        pins: action.payload,
      };

    default:
      return {
        ...state,
        type: action.type,
      };
  }
}
