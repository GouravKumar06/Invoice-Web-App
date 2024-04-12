import React, { useState } from 'react'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';


const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
}
const Login = () => {
    const [step, setStep] = useState(1);

    const Component = steps[step];

    const handleNext = () => {
        setStep(step + 1)
    }
  return (
    <div>
        <Component onNext = {handleNext}/>
    </div>
  )
}

export default Login