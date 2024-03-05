import { useCustomTemplateState } from "../hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCustomTemplateLogic = (stepsLength: number) => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const { customTemplate } = useCustomTemplateState();

  const handleIsNextStepValid = () => {
    switch(activeStep) {
      case 0:
        return customTemplate.name.name.length > 3 && !!customTemplate.name.category;
      case 1:
        return !!customTemplate.sections.name;
      case 2:
        return !!customTemplate.colors.name;
      case 3:
        return !!customTemplate.fonts;
      default:
        return false;
    }
  }

  const maxStep = stepsLength - 1;
  const isStepsCompleted = maxStep === activeStep;
  const isNextStepValid = handleIsNextStepValid();

  const handlePrev = () => {
    setActiveStep((step) => step - 1);
  }

  const handleNext = () => {
    if(isStepsCompleted) {
      console.log(customTemplate);
    }
    if(isNextStepValid && !isStepsCompleted) {
      setActiveStep((step) => step + 1);
    }
  }

  return {
    activeStep,
    handlePrev,
    handleNext,
    isNextStepValid,
  }
}