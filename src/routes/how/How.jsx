import styles from "./How.module.css";

export default function How() {
  return (
    <section className={styles.how} id="how">
      <h1>How</h1>
      <p>
        We are leveraging the principles of Markov Chains to optimize the
        e-waste processing workflow and address the challenges of managing
        repair versus recycle decisions. Unlike traditional queuing theory,
        Markov Chains allow us to model the probabilistic transitions between
        different system states, enabling more accurate predictions of future
        behavior and better decision-making in real time. This process is broken
        down into key stages that integrate with current operations, ensuring
        seamless adoption and continuous optimization.
      </p>
      <h3>Analyzing the System</h3>
      <p>
        The first step is to analyze the current e-waste processing system,
        including the probailities of transitioning into different states. By
        collecting this data, we model the system as a set of states, where each
        state represents a possible condition (e.g., components incinerated, in
        landfill, recycling, or refurbishment). Using Markov Chains, we track
        the probabilities of transitioning between these states over time,
        helping us understand the system’s behavior under various conditions and
        identify potential bottlenecks.
      </p>
      <h3>Developing the Stochastic Markov Chain Model</h3>
      <p>
        Using the collected data, we develop a Markov Chain model that simulates
        the transitions between system states based on probabilistic rules. The
        model calculates the likelihood of moving from one state to another The
        transition probabilities are represented by{" "}
        <strong>
          p<sub>ij</sub>
        </strong>
        , where <strong>i</strong> is the current state and <strong>j</strong>{" "}
        is the next state. These probabilities are arranged in the transition
        matrix <strong>P</strong>, which defines the likelihood of moving
        between all possible states:
      </p>
      <pre>
        {`P =   [[p11, p12, p13, p14], 
             [p21, p22, p23, p24], 
             [p31, p32, p33, p34], 
             [p41, p42, p43, p44]]`}
      </pre>
      <p>
        The states in the model include:
        <ul>
          <li>
            <strong>1:</strong> Landfill
          </li>
          <li>
            <strong>2:</strong> Incineration/Unusable
          </li>
          <li>
            <strong>3:</strong> Recycling
          </li>
          <li>
            <strong>4:</strong> Refurbished
          </li>
        </ul>
        By leveraging this model, our client can make data-driven decisions
        quickly, ensuring that the right processes are prioritized.
      </p>
      <h3>Future Application: Integrating with Workflow</h3>
      <p>
        Once the Markov Chain model is developed, it is integrated into the
        clients workflow through a user-friendly interface. The system provides
        real-time suggestions and guidance based on the current state of the
        system and the probabilities of transitioning to other states. It will
        bring their attention to parts of the process that are in need of
        additional investment or improvement.
      </p>
    </section>
  );
}
