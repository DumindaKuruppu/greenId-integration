// VerifyId.tsx

import {useEffect, useState} from 'react';
import './verify.module.css'
declare global {
  interface Window {
    greenidJQuery: string; // whatever type you want to give. (any,number,float etc)
  }
}
declare var greenidUI: any; // Adjust the type accordingly

const VerifyId = () => {
  const [isVerified, setIsVerified] = useState(false)
  const [formData, setFormData] = useState({
    givenNames: "Pradeep",
    middleNames: "",
    surname: "Madusanka",
    dobdate: "1980-01-01",
    dob: "15/06/1994",
    email: "demo@demo.com",
    propertyName: "",
    flatNumber: "",
    streetNumber: "2",
    streetName: "TESTER",
    streetType: "RD",
    suburb: "BLACKWOOD",
    state: "SA",
    postcode: "5051",
    country: ""
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    console.log("useEffect")
    // Callback functions
    const onError = (verificationToken:any, errorName:any, code:any, error:any) => {
      console.log('Error occurred');
      console.log(verificationToken, errorName, code, error);
      // Handle error
    };

    const onSessionComplete = (verificationToken:any, overallState:any) => {
      console.log("inside onSessionComplete");
      console.log(verificationToken, overallState);
      // Handle session complete
    };

    const onSourceAttempt = (verificationToken:any, sourceName:any, checkState:any, overallState:any) => {
      console.log('Source attempt');
      console.log(verificationToken,sourceName,checkState, overallState);
      // Handle source attempt
    };

    const onSessionCancelled = () => {
      console.log('Session cancelled');
      // Handle session cancelled
    };
    const onRegister = () => {
      console.log('onRegister');
      // Handle session cancelled
    };

    const onPreSubmitValidation = (validation:any) => {
      console.log('onPreSubmitValidation',{validation});
      // Handle session cancelled
      return true;
    };


    const onSubmit = (verificationToken:any, overallState:any) => {
      console.log('onSubmit');
      // Handle session cancelled
      console.log(verificationToken, overallState);
      setIsVerified(true)
      return true;
    };

    // Initialize GreenID Web setup
    const greenidJQuery:any = window.greenidJQuery;
    if (greenidJQuery) {
      console.log({greenidUI});
      greenidUI.setup({
        environment: "test",
        formId: "myform",
        frameId: "greenid-div",
        country: "usethiscountry",
        registerCallback: onRegister,
        errorCallback: onError,
        sourceAttemptCallback: onSourceAttempt,
        sessionCompleteCallback: onSessionComplete,
        sessionCancelledCallback: onSessionCancelled,
        preSubmitValidationCallback: onPreSubmitValidation,
        submitCallback: onSubmit,
      });
    } else {
      console.error('greenidJQuery is not available');
    }
  }, []); // Run only once on component mount

  return (
   <>
     <div className="container" style={{width: '60%', margin: 'auto', padding: 60}}>
       {isVerified && <h4>VERIFIED</h4>}
       <div>
         <form method="post" id="myform" role="form">

           <input type="hidden" id="accountId" value="greenid_simpleui_demo" name="accountId"/>
           <input type="hidden" id="apiCode" value="7uj-mdp-3sz-BYb" name="apiCode"/>

           <input type="hidden" id="ruleId" value="default" name="ruleId"/>
           <input type="hidden" id="usethiscountry" value="AU" name="country"/>
           {/*<input type="hidden" id="dob" value={formData.dob} name="dob"/>*/}
           {/*<input type="hidden" id="email" value={formData.email} name="email"/>*/}
           {/*<input type="hidden" id="state" value={formData.state} name="state"/>*/}


           <div className="row">
             <div className="col-25">
               <label htmlFor="givenNames">First Name</label>
             </div>
             <div className="col-75">
               <input type="hidden" id="givenNames" name="givenNames" value={formData.givenNames}
                      onChange={handleChange}
                      placeholder="Your first name.."/>
             </div>
           </div>
           <div className="row">
             <div className="col-25">
               <label htmlFor="middleNames">Middle Name</label>
             </div>
             <div className="col-75">
               <input type="hidden" id="middleNames" name="middleNames" value={formData.middleNames}
                      onChange={handleChange} placeholder="Your middle name.."/>
             </div>
           </div>
           <div className="row">
             <div className="col-25">
               <label htmlFor="surname">Last Name</label>
             </div>
             <div className="col-75">
               <input type="hidden" id="surname" name="surname" value={formData.surname} onChange={handleChange}
                      placeholder="Your surname/last name.."/>
             </div>
           </div>

           <div className="row ">
             <div className="col-25">
               <label htmlFor="">dob</label>
             </div>
             <div className="col-75">
               <input type="hidden" id="dob" name="dob" value={formData.dob} onChange={handleChange}
                      placeholder="dob"/>
             </div>
           </div>
           <div className="row ">
             <div className="col-25">
               <label htmlFor="">email</label>
             </div>
             <div className="col-75">
               <input type="hidden" id="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="email"/>
             </div>
           </div>
           <div className="row ">
             <div className="col-25">
               <label htmlFor="">state</label>
             </div>
             <div className="col-75">
               <input type="hidden" id="state" name="state" value={formData.state} onChange={handleChange}
                      placeholder="state"/>
             </div>
           </div>
           <div className="row ">
             <div className="col-25">
               <label htmlFor="">state</label>
             </div>
             <div className="col-75">
               <input type="submit" id="submitbob" name="submitbob" value="Submit"/>
             </div>
           </div>
         </form>
       </div>
       <div id="greenid-div">
         {/* GreenID Web UI controls will be rendered here */}
       </div>
     </div>


   </>
  );
};

export default VerifyId;
