const Form=()=> {
    return (
        <div>
            <form method="post" id="myform" role="form">

                <input type="hidden" id="accountId" value="greenid_simpleui_demo" name="accountId"/>
                <input type="hidden" id="apiCode" value="7uj-mdp-3sz-BYb" name="apiCode"/>

                <input type="hidden" id="ruleId" value="default" name="ruleId"/>
                <input type="hidden" id="usethiscountry" value="AU" name="country"/>


                <div className="row">
                    <div className="col-25">
                        <label htmlFor="givenNames">First Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="givenNames" name="givenNames" placeholder="Your first name.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="middleNames">Middle Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="middleNames" name="middleNames" placeholder="Your middle name.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="surname">Last Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="surname" name="surname" placeholder="Your surname/last name.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="dob">Date of Birth</label>
                    </div>
                    <div className="col-75">
                        <input type="date" id="dobdate" name="dobdate" value="1980-01-01"/>
                        <input type="hidden" id="dob" name="dob" value=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-75">
                        <input type="email" id="email" name="email" value="demo@demo.com"/>
                    </div>
                </div>
                <div className="row">
                    <span>Enter your address below</span>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="propertyName">Building/Property Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="propertyName" name="propertyName" placeholder="You building name.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="flatNumber">Unit Number</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="flatNumber" name="flatNumber" placeholder="Your unit/flat number.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="streetNumber">Street Number</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="streetNumber" name="streetNumber" placeholder="Your street number.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="streetName">Street Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="streetName" name="streetName" placeholder="Your street name.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="streetType">Street Type</label>
                    </div>
                    <div className="col-75">
                        <select id="streetType" name="streetType">
                            <option value="RD">ROAD</option>
                            <option value="ST">STREET</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="suburb">Suburb</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="suburb" name="suburb" placeholder="Your suburb name.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="state">State</label>
                    </div>
                    <div className="col-75">
                        <select id="state" name="state">
                            <option value="">Select your State/Territory...</option>
                            <option value="NSW">NSW</option>
                            <option value="VIC">VIC</option>
                            <option value="QLD">QLD</option>
                            <option value="SA">SA</option>
                            <option value="WA">WA</option>
                            <option value="ACT">ACT</option>
                            <option value="NT">NT</option>
                            <option value="TAS">TAS</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="postcode">Postcode</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="postcode" name="postcode" placeholder="Your postcode.."/>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-25">
                        <label htmlFor=""></label>
                    </div>
                    <div className="col-75">
                        <input type="submit" id="submitbob" name="submitbob" value="Submit"/>
                    </div>
                </div>
            </form>
        </div>
    );
}


export default Form;