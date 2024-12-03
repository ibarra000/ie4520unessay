import { useState } from "react";
import { subtract, multiply, inv } from "mathjs";
import styles from "./Demo.module.css";

export default function Demo() {
  const [capital, setCapital] = useState(10);
  const [landfillProbabilities, setLandfillProbabilities] = useState([
    0.655, 0.125, 0.22, 0,
  ]);
  const incinerationProbabilities = [0, 1, 0, 0];
  const [recyclingProbabilities, setRecyclingProbabilities] = useState([
    0.13, 0.02, 0.83, 0.02,
  ]);
  const [refurbishedProbabilities, setRefurbishedProbabilities] = useState([
    0.655, 0.125, 0.22, 0,
  ]);

  const [landfillInvestmentPrice, setLandfillInvestmentPrice] = useState(
    Math.floor(Math.random() * capital + 1)
  );
  const [landfillProbabilityChange, setLandfillProbabilityChange] = useState(
    Math.random()
  );

  const [recyclingInvestmentPrice, setRecyclingInvestmentPrice] = useState(
    Math.floor(Math.random() * capital + 1)
  );
  const [recyclingProbabilityChange, setRecyclingProbabilityChange] = useState(
    Math.random()
  );

  const [refurbishedInvestmentPrice, setRefurbishedInvestmentPrice] = useState(
    Math.floor(Math.random() * capital + 1)
  );
  const [refurbishedProbabilityChange, setRefurbishedProbabilityChange] =
    useState(Math.random());

  const [expectedNumberOfVisits, setExpectedNumberOfVisits] = useState([
    [15.205],
    [19.23],
    [15.205],
  ]);

  // Helper function to normalize probabilities
  const normalize = (probabilities) => {
    const sum = probabilities.reduce((acc, prob) => acc + prob, 0);
    return probabilities.map((prob) => prob / sum);
  };

  // Update the expected number of visits based on probabilities
  const updateExpectedNumberOfVisits = () => {
    let q = [
      [
        landfillProbabilities[0],
        landfillProbabilities[2],
        landfillProbabilities[3],
      ],
      [
        recyclingProbabilities[0],
        recyclingProbabilities[2],
        recyclingProbabilities[3],
      ],
      [
        refurbishedProbabilities[0],
        refurbishedProbabilities[2],
        refurbishedProbabilities[3],
      ],
    ];
    let i = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];

    // Using math.js methods
    let matrixDiff = subtract(i, q);
    let matrixDiffInverse = inv(matrixDiff);
    let expectedVisits = multiply(matrixDiffInverse, [[1], [1], [1]]);
    console.log(expectedVisits);
    setExpectedNumberOfVisits(expectedVisits);
  };

  const handleLandfillInvestment = () => {
    console.log("Handling Landfill Investment...");
    if (capital - landfillInvestmentPrice >= 0) {
      setCapital((prev) => {
        const newCapital = prev - landfillInvestmentPrice;
        console.log("Updated Capital after Landfill Investment:", newCapital);
        return newCapital;
      });

      // Update landfill probabilities
      const updatedProbabilities = [
        landfillProbabilities[0] * (1 - landfillProbabilityChange),
        landfillProbabilities[1] * (1 - landfillProbabilityChange),
        landfillProbabilities[2] * (1 + landfillProbabilityChange),
        landfillProbabilities[3],
      ];
      setLandfillProbabilities(normalize(updatedProbabilities));

      // Reset prices and changes for all investments
      setLandfillInvestmentPrice(Math.floor(Math.random() * capital + 1));
      setRecyclingInvestmentPrice(Math.floor(Math.random() * capital + 1));
      setRefurbishedInvestmentPrice(Math.floor(Math.random() * capital + 1));
      setLandfillProbabilityChange(Math.random());
      setRecyclingProbabilityChange(Math.random());
      setRefurbishedProbabilityChange(Math.random());

      // Update expected number of visits after the change
      updateExpectedNumberOfVisits();
    } else {
      console.log("Insufficient capital for Landfill Investment.");
    }
  };

  const handleRecyclingInvestment = () => {
    console.log("Handling Recycling Investment...");
    if (capital - recyclingInvestmentPrice >= 0) {
      setCapital((prev) => {
        const newCapital = prev - recyclingInvestmentPrice;
        console.log("Updated Capital after Recycling Investment:", newCapital);
        return newCapital;
      });

      // Update recycling probabilities
      const updatedProbabilities = [
        recyclingProbabilities[0] * (1 - recyclingProbabilityChange),
        recyclingProbabilities[1] * (1 - recyclingProbabilityChange),
        recyclingProbabilities[2] * (1 + recyclingProbabilityChange),
        recyclingProbabilities[3] * (1 + recyclingProbabilityChange),
      ];
      setRecyclingProbabilities(normalize(updatedProbabilities));

      // Reset prices and changes for all investments
      setLandfillInvestmentPrice(Math.floor(Math.random() * capital + 1));
      setRecyclingInvestmentPrice(Math.floor(Math.random() * capital + 1));
      setRefurbishedInvestmentPrice(Math.floor(Math.random() * capital + 1));
      setLandfillProbabilityChange(Math.random());
      setRecyclingProbabilityChange(Math.random());
      setRefurbishedProbabilityChange(Math.random());

      // Update expected number of visits after the change
      updateExpectedNumberOfVisits();
    } else {
      console.log("Insufficient capital for Recycling Investment.");
    }
  };

  const handleRefurbishedInvestment = () => {
    console.log("Handling Refurbished Investment...");
    if (capital - refurbishedInvestmentPrice >= 0) {
      setCapital((prev) => {
        const newCapital = prev - refurbishedInvestmentPrice;
        console.log(
          "Updated Capital after Refurbished Investment:",
          newCapital
        );
        return newCapital;
      });

      // Update refurbished probabilities
      const updatedProbabilities = [
        refurbishedProbabilities[0] * (1 - refurbishedProbabilityChange),
        refurbishedProbabilities[1] * (1 - refurbishedProbabilityChange),
        refurbishedProbabilities[2] * (1 + refurbishedProbabilityChange),
        refurbishedProbabilities[3],
      ];
      setRefurbishedProbabilities(normalize(updatedProbabilities));

      // Reset prices and changes for all investments
      setLandfillInvestmentPrice(Math.floor(Math.random() * capital + 1));
      setRecyclingInvestmentPrice(Math.floor(Math.random() * capital + 1));
      setRefurbishedInvestmentPrice(Math.floor(Math.random() * capital + 1));
      setLandfillProbabilityChange(Math.random());
      setRecyclingProbabilityChange(Math.random());
      setRefurbishedProbabilityChange(Math.random());

      // Update expected number of visits after the change
      updateExpectedNumberOfVisits();
    } else {
      console.log("Insufficient capital for Refurbished Investment.");
    }
  };

  return (
    <section className={styles.demo} id="demo">
      <h1>Demo</h1>
      <p>Welcome to the Simulation!</p>
      <p>
        In this simulation, you are the consultant for an E-Waste Processing
        Plant. When you joined the company, they provided you with a transition
        matrix that describes their current process.
      </p>
      <p>
        This transition matrix contains probabilities for different events in
        the company's process. These are the real values we worked with! Your
        task is to explore how changing these probabilities (by investing in
        different processes) might affect key performance indicators.
      </p>
      <p>
        One of the key metrics we are focusing on is the{" "}
        <strong>Expected Number of Visits</strong>. This metric tells us how
        often items are processed at each stage. It helps us understand where
        the parts are ending up most frequently.
      </p>
      <p>
        So, how can we improve these results? By adjusting the process in
        various ways, we can observe how these changes impact the expected
        number of visits and overall performance.
      </p>
      <p>
        Note: In the simulation, when we increase the expected number of visits
        to recycling and refurbishment, we improve the overall performance of
        the system. This ensures that items are being processed in the most
        sustainable way possible, reducing environmental impact. It’s a win for
        both the company's efficiency and the planet!
      </p>
      <p>
        Note: <b>Refresh</b> if you want to restart the simulation.
      </p>

      {/* Table for Transition Matrix and Investment Prices */}
      <table className={styles.transitionTable}>
        <thead>
          <tr>
            <th>Process</th>
            <th>Probabilities</th>
            <th>Investment Price</th>
            <th>Probability Change</th>
            <th>Expected Visits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Landfill</td>
            <td>
              {landfillProbabilities.map((prob) => prob.toFixed(3)).join(", ")}
            </td>
            <td>{"$" + landfillInvestmentPrice + "M"}</td>
            <td>{landfillProbabilityChange.toFixed(3)}</td>
            <td>{expectedNumberOfVisits[0]?.[0].toFixed(3)}</td>
          </tr>
          <tr>
            <td>Recycling</td>
            <td>
              {recyclingProbabilities.map((prob) => prob.toFixed(3)).join(", ")}
            </td>
            <td>{"$" + recyclingInvestmentPrice + "M"}</td>
            <td>{recyclingProbabilityChange.toFixed(3)}</td>
            <td>{expectedNumberOfVisits[1]?.[0].toFixed(3)}</td>
          </tr>
          <tr>
            <td>Refurbished</td>
            <td>
              {refurbishedProbabilities
                .map((prob) => prob.toFixed(3))
                .join(", ")}
            </td>
            <td>{"$" + refurbishedInvestmentPrice + "M"}</td>
            <td>{refurbishedProbabilityChange.toFixed(3)}</td>
            <td>{expectedNumberOfVisits[2]?.[0].toFixed(3)}</td>
          </tr>
        </tbody>
      </table>

      <form>
        <label>Capital Remaining: {"$" + capital + "M"}</label>
        <div className={styles.buttonContainer}>
          <button type="button" onClick={handleLandfillInvestment}>
            Invest into Landfill Process <br></br> Price:{" "}
            {"$" + landfillInvestmentPrice + "M"}
          </button>
          <button type="button" onClick={handleRecyclingInvestment}>
            Invest into Recycling Process <br></br> Price:{" "}
            {"$" + recyclingInvestmentPrice + "M"}
          </button>
          <button type="button" onClick={handleRefurbishedInvestment}>
            Invest into Refurbishing Process <br></br> Price:{" "}
            {"$" + refurbishedInvestmentPrice + "M"}
          </button>
        </div>
      </form>
    </section>
  );
}
