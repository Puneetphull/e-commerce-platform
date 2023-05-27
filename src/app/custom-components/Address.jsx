import React, { useState } from 'react';
import { Col, Form, Button, Container } from "@themesberg/react-bootstrap";
import { InputField, SelectField } from "./Fields";
import { focusOnFeild,validationError,hasValidationError } from "../custom-components/validation";
import { useNavigate } from 'react-router-dom';
import { customRoutes } from '../routes/routes';
import { city, countries, state, zipcode } from '../static.data';

export default function Address(props) {
  const navigate = useNavigate()
    const initialValue = {
    address1:'',
    address2:'',
    country:'',
    state:'',
    city:'',
    postalCode:''
    }

    const [address,setAddress] = useState(initialValue);
    const [errors, setErrors] = useState([]);

    const validate = () => {
        const newError = {};
        let positionFocus = "";
        if (!address.address1 || !address.address1.trim()) {
            newError["address1"] = " is Required";
            positionFocus = positionFocus || "address1";
        } 
        // if (!address.address2 || !address.address2.trim()) {
        //     newError["address2"] = "is Required";
        //     positionFocus = positionFocus || "address2";
        // }
        if (!address.country || !address.country.trim()) {
            newError["country"] = "is Required";
            positionFocus = positionFocus || "country";
        }
        if(!address.state){
            newError["state"] = "is Required";
            positionFocus = positionFocus || "state";
        }
        if(!address.city){
            newError["city"] = "is Required";
            positionFocus = positionFocus || "city";
        }
        if(!address.postalCode){
            newError["postalCode"] = "is Required";
            positionFocus = positionFocus || "postalCode";
        }
        
        setErrors(newError);
        if (positionFocus) {
           focusOnFeild(positionFocus);
            return false;
        }
        return true;
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setAddress({ ...address, [name]: value });
      };
    
    

    const submit = (e)=>{
       e.preventDefault();
       if(props.validate() && validate()){
          navigate(customRoutes.adminHome.path);
       }
    }


  return (
    <main>
      <section className="d-flex align-items-center my-5 mb-lg-5">
        <Container>
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                 <div className="mb-4 mt-md-0">
                  <h3 className="mb-0 mt-1">Address Information</h3>
                </div>
                <Form className="mt-4">
                  <div className="row">
                    <InputField
                     className="col-xl-6"
                      name="address1"
                      label="Address Line 1"
                      type="text"
                      error={hasValidationError(errors, "address1") ? 
                      validationError(errors,"address1")
                     : null}
                      validation={true}
                      placeholder="Enter the Name"
                      onChange={handleOnChange}
                    />
                    <InputField
                    className="col-xl-6"
                      name="address2"
                      label="Address Line 2"
                      type="text"
                      placeholder="Enter the Name"
                      onChange={handleOnChange}
                    />
                    <SelectField
                      label="Country"
                      defaultValue="select Country"
                      name="country"
                      fieldName="countryName"
                      options={countries}
                      value="countryName"
                      onChange={handleOnChange}
                      error={hasValidationError(errors, "country") ? 
                      validationError(errors,"country")
                     : null}
                      validation={true}
                    />
                  </div>

                  <div className="row">
                    <SelectField
                      className="col-4"
                      label="State"
                      defaultValue="select State"
                      fieldName="stateName"
                      options={state}
                      name="state"
                      value="stateName"
                      error={hasValidationError(errors, "state") ? 
                      validationError(errors,"state")
                     : null}
                      onChange={handleOnChange}
                      validation={true}
                    />
                    <SelectField
                    className="col-4"
                      label="City"
                      defaultValue="select City"
                      fieldName="cityName"
                      options={city}
                      value="cityName"
                      name="city"
                      error={hasValidationError(errors, "city") ? 
                      validationError(errors,"city")
                     : null}
                      onChange={handleOnChange}
                      validation={true}
                    />
                    <SelectField
                    className="col-4"
                      label="Postal Code & zipcode"
                      defaultValue="select Postal Code"
                      name="postalCode"
                      fieldName="zipcode"
                      value="zipcode"
                      options={zipcode}
                      error={hasValidationError(errors, "postalCode") ? 
                      validationError(errors,"address1")
                     : null}
                      onChange={handleOnChange}
                      validation={true}
                    />
                  </div>
                  <Button variant="primary" type="submit" onClick={submit} className="w-100">
                    Finish
                  </Button>
                </Form>
              </div>
            </Col>
        </Container>
      </section>
    </main>
  )
}
