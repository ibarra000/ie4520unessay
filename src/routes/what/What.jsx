import styles from "./What.module.css";

export default function What() {
  return (
    <section className={styles.what} id="what">
      <h1>What</h1>
      <p>
        E-waste, the byproduct of discarded technology such as computers,
        phones, and other hardware, is growing at an alarming rate due to the
        increasing pace of technological production. Unfortunately, current
        e-waste disposal and recycling efforts have been insufficient to address
        this growing environmental challenge. E-waste contains harmful
        materials—such as chemicals, metals, and other toxic substances—that,
        when improperly disposed of, can pollute the air, water, and ecosystems,
        posing significant environmental and public health risks.
      </p>
      <p>
        According to UNITAR, a record 62 million tonnes of e-waste were produced
        in 2022, with projections showing a 32% increase by 2030. However, only
        22.3% of this waste was properly collected and disposed of, with a goal
        to increase this number to 60%, saving the industry an estimated $38
        billion. This highlights the importance of enhancing e-waste recycling
        and refurbishment efforts to reduce environmental harm and improve
        resource recovery.
      </p>
      <h3>The Problem</h3>
      <p>
        A significant challenge in e-waste management is determining which
        components are suitable for repair, recycling, or disposal. The current
        systems lack efficient decision-making frameworks for managing these
        tasks, which often results in backlogs, inefficient resource use, and
        poor handling of valuable components. The key to improving this process
        lies in optimizing the decision-making regarding whether to repair or
        recycle components, based on factors like condition, resources, and
        technician availability.
      </p>
      <h3>The Solution</h3>
      <p>
        To tackle these challenges, we are implementing a stochastic decision
        model based on Markov Chains. Each state represents a potential
        conditoin for the components, such as incierated, in landfill,
        recycling, or refurbishment. By using this model, we can predict and
        manage the flow of tasks, reduce bottlenecks, and improve the efficiency
        and consistency of the e-waste processing system.
      </p>
    </section>
  );
}
