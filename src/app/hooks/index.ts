import { createTypedHooks } from "easy-peasy";
import { StoreModel } from "../store";

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
