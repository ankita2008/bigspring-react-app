import "./workflow.css";
import workflowImg from "../../assets/images/workflow.svg";

export default function Workflow() {
  return (
    <section className="workflow-section">
      <div className="workflow-container">
        <h2>
          Experience the best
          <br />
          workflow with us
        </h2>

        <div className="workflow-image">
          <img src={workflowImg} alt="Workflow" />
        </div>
      </div>
    </section>
  );
}