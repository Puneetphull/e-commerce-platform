import React from 'react'
import { Container,Row,Form,Col,Button } from '@themesberg/react-bootstrap'
import { InputField } from '../custom-components/Fields';
import BgImage from "../assets/img/signin.svg";
export  function ForgetPassword() {
  return (
    
    <main>
      <section className="vh-lg-100 mt-4 mt-lg-0 bg-soft d-flex align-items-center">
        <Container>
        <Row
                className="justify-content-center form-bg-image"
                style={{ backgroundImage: `url(${BgImage})` }}
              >
            <p className="text-center">
              {/* <Card.Link as={Link} to={Routes.Signin.path} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
            </Card.Link> */}
           
            </p>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="signin-inner my-3 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3>Forgot your password?</h3>
                <p className="mb-4">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                <Form>
                  <div className="mb-4">
                   <InputField name="email" type="email" placeholder="Please Enter the Email" />
                  </div>
                  <Button variant="primary" className="w-100">
                    Recover password
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}
