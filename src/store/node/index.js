import * as selector from '@store/node/selector';
import { nodeSlice } from '@store/node/slice';

export const { setSelectedNodes } = nodeSlice.actions;
export const { totalSelectedNodeCountSelector, selectedNodeCountsSelector } =
  selector;
export const nodeReducer = nodeSlice.reducer;
