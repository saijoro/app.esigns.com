import * as React from "react";

interface StepperProps {
  totalSteps: number;
  currentStep: number;
  steps: string[];
}

const Stepper: React.FC<StepperProps> = ({
  totalSteps = 1,
  currentStep = 1,
  steps = [],
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-2">
      <ol className="flex justify-between w-full">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <li
              key={stepNumber}
              className={`flex items-center ${
                stepNumber !== totalSteps ? "w-full" : ""
              }`}
            >
              <div className="flex items-center">
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium text-white ${
                    isActive ? "bg-orange-500" : "bg-red-200"
                  } ${isCompleted ? "bg-green-700" : ""}`}
                  aria-current={isActive ? "step" : undefined}
                >
                  {stepNumber}
                </span>
                <span
                  className={`ml-2 text-sm font-medium ${
                    isActive || isCompleted
                      ? "text-orange-500"
                      : "text-gray-500"
                  }`}
                >
                  {step}
                </span>
              </div>
              {stepNumber !== totalSteps && (
                <div className="flex-1 mx-4">
                  <div className="h-px border-0 border-t-2 border-dashed border-gray-300" />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export { Stepper };
