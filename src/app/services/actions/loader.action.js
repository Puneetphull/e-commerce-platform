import { userConstants } from "../../constants";

const isLoadingTrue = () => {
  return {
    type: userConstants.ISLOADINGTRUE,
  };
};

const isLoadingFalse = () => {
  return {
    type: userConstants.ISLOADINGFALSE,
  };
};

export const loaderAction = {
  isLoadingTrue,
  isLoadingFalse,
};
