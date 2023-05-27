import React from "react";
import { Form, InputGroup, FormCheck } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Datetime from 'react-datetime';
import  moment from 'moment-timezone';
import "react-datetime/css/react-datetime.css";



export function InputField(props) {

  return (
    <Form.Group id={props.id} className={`mb-4 ${props.parentClassName ? props.parentClassName : ''}`}>
      <Form.Label>
        {props.label}{" "}
        {props.validation ? <span className="text-danger">*</span> : <></>}{" "}
        {props.error ? <span className="text-danger" >{props.error}</span> : <></>}{" "}
      </Form.Label>
      <InputGroup>
        <InputGroup.Text>
          {props.showIcon ? <FontAwesomeIcon icon={props.iconName} /> : <></>}
        </InputGroup.Text>
        <Form.Control
          isInvalid={props.isInvalid}
          autoFocus={props.autoFocus ? props.autoFocus : false}
          required={props.required ? props.required : false}
          type={props.type}
          placeholder={props.placeholder ? props.placeholder : "Please Enter"}
          name={props.name}
          onChange={props.onChange}
          isValid={props.isValid}
          className={props.className}
          maxLength={props.maxLength}
          as={props.as}
          rows={props.rows}
          readOnly={props.readOnly}
          value={props.value}
        />
      </InputGroup>
    </Form.Group>
  );
}

export function CheckBoxField(props) {
  return (
    <FormCheck type="checkbox" className="d-flex">
      <FormCheck.Input
        required={props.required}
        id={props.id}
        className="me-2"
        name={props.name}
        onChange={props.onChange}
      />
      <FormCheck.Label htmlFor={props.htmlFor}>{props.label}</FormCheck.Label> 
     {props.error ? <span className="text-danger" >{props.error}</span> : <></>}
    </FormCheck>
  );
}

export function SelectField(props) {
  return (
    <Form.Group className={`mb-3${props.className ? props.className :''}`}>
      <Form.Label>
        {props.label}{" "}
        {props.validation ? <span className="text-danger"> *</span> : ""}{" "}
        {props.error ? <span className="text-danger" >{props.error}</span> : ""}{" "}
      </Form.Label>
      <Form.Select name={props.name} onChange={props.onChange}  value={props.selectedValue}  >
        <option defaultValue>{props.defaultValue}</option>
        {props.options ? (
          props.options.map((option, index) => (
            <option key={index} value={option[props.value]}>
              {option[props.fieldName]}
            </option>
          ))
        ) : (
          <option> </option>
        )}
      </Form.Select>
    </Form.Group>
  );
}


export function DateTimePicker(props){
  return (
  
      <Form.Group className="mb-3">
      <Form.Label>
     {props.label}
        {props.validation ? <span className="text-danger">*</span> : <></>}{" "}
        {props.error ? <span className="text-danger" >{props.error}</span> : <></>}{" "}
      </Form.Label>
        <Datetime
          timeFormat={props.timeFormat ? props.timeFormat : false}
          closeOnSelect={props.closeOnSelect}
          onChange={props.setDate}
          dateFormat={props.dateFormat}
          renderInput={(prop, openCalendar) => (
            <InputGroup>
              <InputGroup.Text><FontAwesomeIcon icon={props.icon} /></InputGroup.Text>
              <Form.Control
                required={props.required}
                type="text"
                value={props.date ? moment(props.date).format(props.dateFormat) : ""}
                placeholder="mm/dd/yyyy"
                onFocus={openCalendar}
                onChange={() => { }}/>
            </InputGroup>
          )} />
      </Form.Group>
    
  )
}
