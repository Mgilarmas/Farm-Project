import { push, ref, get, remove } from "firebase/database";
import db from "./firebase.config";

const refSeeds = ref(db, "/StarCrops");

const getAllSeeds = () => {
  return get(refSeeds);
}

const addSeeds = (seed, price) => {
  return push(refSeeds, {
    seed: seed,
    price: price
  })
}

const removeSeeds = (key) => {
  const refSeedsOnlyThisKey = ref(db, `/StarCrops/${key}`);
  return remove(refSeedsOnlyThisKey)
}

export default{
  getAllSeeds,
  addSeeds,
  removeSeeds
}