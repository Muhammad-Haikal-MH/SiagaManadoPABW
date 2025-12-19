import {banjir} from "./banjir";
import { gempa } from "./gempa";
import {longsor} from "./longsor";

export const mitigasiMap: Record<string, any> = {
  banjir: banjir,
  gempa: gempa,
  longsor: longsor,
};
