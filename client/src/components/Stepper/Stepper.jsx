// import React from "react";
// import "./Stepper.css";

// function Stepper({ steps, activeStep }) {
//   function getStepClass(step) {
//     let cls = "step";
//     if (activeStep === step) {
//       cls += " step-active";
//     } else if (activeStep > step) {
//       cls += " step-done";
//     } else {
//       cls += " step-inactive";
//     }
//     return cls;
//   }

//   return (
//     <div className="steps-container">
//       {
//         steps.map((label, index) => (
//           // eslint-disable-next-line react/no-array-index-key
//           <div className={getStepClass(index)} key={index}>
//             {/* <div> */}
//             <div className="d-flex w-100 justify-content-center">
//               <div className="d-flex justify-content-center circle">
//                 {getStepClass(index).trim() === "step step-active" ? "ye" : "no"}
//               </div>
//             </div>
//             {/* </div> */}
//             <div className="d-flex justify-content-center label">{label}</div>
//             {index < steps.length - 1 && <div className="line" />}
//           </div>
//         ))
//       }
//     </div>
//   );
// }

// export default Stepper;

import React, { useState } from "react";
import "./Stepper.css";

function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <section className="signup-step-container">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="wizard">
              <div className="wizard-inner">
                <div className="connecting-line" />
                <ul className="nav nav-tabs justify-content-between" role="tablist">
                  <li
                    role="presentation"
                    className={activeStep === 0 ? "active" : "disabled"}
                  >
                    <a
                      href="#step1"
                      data-toggle="tab"
                      aria-controls="step1"
                      role="tab"
                      aria-expanded={activeStep === 0 ? "true" : "false"}
                      onClick={() => handleStepClick(0)}
                    >
                      <span className="round-tab">1</span>
                      {" "}
                      <i>Step 1</i>
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className={activeStep === 1 ? "active" : "disabled"}
                  >
                    <a
                      href="#step2"
                      data-toggle="tab"
                      aria-controls="step2"
                      role="tab"
                      aria-expanded={activeStep === 1 ? "true" : "false"}
                      onClick={() => handleStepClick(1)}
                    >
                      <span className="round-tab">2</span>
                      {" "}
                      <i>Step 2</i>
                    </a>
                  </li>
                </ul>
              </div>
              <form
                // role="form"
                action="index.html"
                className="login-box"
              >
                <div className="tab-content" id="main_form">
                  <div
                    className={`tab-pane ${activeStep === 0 ? "active" : ""}`}
                    role="tabpanel"
                    id="step1"
                  >
                    <h4 className="text-center">Step 1</h4>
                    <div className="row">
                      <h4>Step 1</h4>
                    </div>
                    <ul className="list-inline pull-right">
                      <li>
                        <button
                          type="button"
                          className="default-btn next-step"
                          onClick={handleNextStep}
                        >
                          Continue to next step
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane ${activeStep === 1 ? "active" : ""}`}
                    role="tabpanel"
                    id="step2"
                  >
                    <h4 className="text-center">Step 2</h4>
                    <div className="row">
                      <div className="row">
                        <h4>Step 2</h4>
                      </div>
                    </div>

                    <ul className="list-inline pull-right">
                      <li>
                        <button
                          type="button"
                          className="default-btn prev-step"
                          onClick={handlePrevStep}
                        >
                          Back
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="default-btn next-step skip-btn"
                          onClick={handleNextStep}
                        >
                          Skip
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="default-btn next-step"
                          onClick={handleNextStep}
                        >
                          Continue
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="clearfix" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepperForm;
