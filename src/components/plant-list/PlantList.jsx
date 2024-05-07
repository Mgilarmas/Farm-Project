import "./PlantList.css";
import starcropsService from "../../services/firebase/starcrops.service";
import { useState, useEffect } from "react";

function PlantList() {

  const [seed, setSeed] = useState("");
  const [price, setPrice] = useState(0);
  const [crops, setCrops] = useState([])
  const [selectedSeedIndex, setSelectedSeedIndex] = useState(null);


  const changeSeed = (e) => {
    setSeed(e.target.value)
  }

  const changePrice = (e) => {
    setPrice(e.target.value)
  }

  const addNewSeed = (e) => {
    // e.preventDefault();

    saveSeed(e.target.seed.value, e.target.price.value);
  }

  const saveSeed = (seed, price) => {
    {      starcropsService.addSeeds(seed, price).then((res) => {
        console.log("seed save")
      })
    }
  }

  const getAllSeeds = () => {
    starcropsService.getAllSeeds().then((items) => {
      let auxSeeds = [];
      items.forEach((item) => {
        const key = item.key;
        const data = item.val();

        const auxSeed = {
          key: key,
          seed: data.seed,
          price: data.price
        }
        auxSeeds.push(auxSeed);
      })
      setCrops([...auxSeeds]);
    });

  }

  useEffect(() => {
    getAllSeeds();
  }, [])

  const deleteSeeds = (key) => {
    starcropsService.removeSeeds(key).then(() => {
      getAllSeeds()
    })

  }

  const editSeed = (key, index) => {
    const selectedSeed = crops[index];
    setSeed(selectedSeed.seed);
    setPrice(selectedSeed.price);
    setSelectedSeedIndex(index);
    deleteSeeds(key);
  };

  return (
    <>
      <div className="plant-list-background">
        <div className="form-plant-list">
          <form onSubmit={addNewSeed}>
            <label htmlFor="seed">Seed:</label>
            <input type="text" id="seed" name="seed" value={seed} onChange={changeSeed} />
            <label htmlFor="seed">Price:</label>
            <input type="number" id="price" name="price" value={price} onChange={changePrice} />

            <button type="submit">{selectedSeedIndex !== null ? "Edit Seed" : "Add Seed"}</button>
          </form>
        </div>
        <div className="show-plant-list">
          {
            crops.map((c, index) => (
              <div key={c.key} className="show-plant-list-elements">
                <p>{c.seed}</p>
                <p>{c.price}</p>
                <button className="delete-button" onClick={() => deleteSeeds(c.key)}>Delete</button>
                <button className="edit-button" onClick={() => editSeed(c.key, index)}>Edit</button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default PlantList