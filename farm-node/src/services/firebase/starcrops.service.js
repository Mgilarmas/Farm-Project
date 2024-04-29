import { push, ref, get, remove } from "firebase/database";
import db from "./firebase.config";

const refSeeds = ref(db, "/StarCrops");

const getAllSeeds = () => {
  return get(refSeeds);
}

const addSeeds = (seed, price) => {
  push(refSeeds, {
    seed: seed,
    price: price
  })
}

const removeSeeds = () => {
  return remove(refSeeds);
}

export default{
  getAllSeeds,
  addSeeds,
  removeSeeds
}