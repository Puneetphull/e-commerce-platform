import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { faCog, faEnvelopeOpen, faSearch, faSignOutAlt, faUserShield,faBarsStaggered,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { Nav, Form, Image, Navbar, Dropdown, Container, InputGroup,Button } from '@themesberg/react-bootstrap';
import Profile3 from "../assets/doctor/profile-picture-3.jpg";
import { cartActions } from "../services/actions";
import { Link } from "react-router-dom";
import { helperService } from "../helper";
import { productService } from "../api";



export  function Navbars(props) {
  const dispatch = useDispatch();
  const [searchResult,setSearchResult] = useState([]);
  const { productInCart} = useSelector((state) => state.cartReducer);
  const {user} = useSelector((state) => state.authentication);
  const [searchTxt,setSearchTxt] = useState('');
  useEffect(() => {
    dispatch(cartActions.GETITEMSREQUEST());
  }, []);




  function onChangeSearchText(e){
    let {value} = e.target;
    setSearchTxt(value);
    productService.SearchProductAPI(value).then((response)=>{
      setSearchResult(response.data.items)
    })

  }


  
  
  const [notifications, setNotifications] = useState([]);
    // const areNotificationsRead = notifications.reduce((acc, notif) => acc && notif.read, true);
  
    const markNotificationsAsRead = () => {
      setTimeout(() => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
      }, 300)
    }

  

  


  // const Notification = (props) => {
  //   const { link, sender, image, time, message, read = false } = props;
  //   const readClassName = read ? "" : "text-danger";

  //   return (
  //     <ListGroup.Item action href={link} className="border-bottom border-light">
  //       <Row className="align-items-center">
  //         <Col className="col-auto">
  //           <Image src={image} className="user-avatar lg-avatar rounded-circle" />
  //         </Col>
  //         <Col className="ps-0 ms--2">
  //           <div className="d-flex justify-content-between align-items-center">
  //             <div>
  //               <h4 className="h6 mb-0 text-small">{sender}</h4>
  //             </div>
  //             <div className="text-end">
  //               <small className={readClassName}>{time}</small>
  //             </div>
  //           </div>
  //           <p className="font-small mt-1 mb-0">{message}</p>
  //         </Col>
  //       </Row>
  //     </ListGroup.Item>
  //   );
  // };

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center"  >
          <Button onClick={props.collapse} className="sidebar-toggle d-none d-lg-inline-block align-items-center justify-content-center me-3 btn btn-icon-only btn-lg" >  
          <FontAwesomeIcon icon={faBarsStaggered} role="button"  />
          </Button>
            <Form className="navbar-search">
              <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge search-bar">
                  <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" onChange={onChangeSearchText} />
                </InputGroup>
              </Form.Group>

              <div className="search-results-wrap">
              {searchResult && searchTxt.length > 0 && searchResult.length > 0 && searchResult.map((data)=>(<a href={`/productdetail/${data.sku}`} className="result-ridect">
                  <div className="result-img">
                    <img src={data.custom_attributes.find(data=> data.attribute_code === "image").value} className="img-fluid"/>
                  </div>
                  <div className="result-desc">
                    <div className="result-desc-name">{data.name}</div>
                    <div className="result-desc-price">Price <span>${data.price}</span></div>
                  {/* <div className="result-desc-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo...</div> */}
                  </div>
                </a>
              ))}
              </div>
            </Form>
          </div>
          <Nav className="align-items-center">
            <Dropdown as={Nav.Item} onToggle={markNotificationsAsRead} >
              {/* <Dropdown.Toggle as={Nav.Link} className="text-dark icon-notifications me-lg-3"> */}
              <Link to="/cart"  className="icon icon-sm">
                 <FontAwesomeIcon  icon={faShoppingCart} role="button" className="bell-shake" /><span className="cart-number">{productInCart.length}</span>
                  {/* {areNotificationsRead ? null : <span className="icon-badge rounded-circle unread-notifications" />} */}
                </Link> 
              {/* </Dropdown.Toggle> */}
              {/* <Dropdown.Menu className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                <ListGroup className="list-group-flush">
                  <Nav.Link href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">
                    Notifications
                  </Nav.Link>

                  {notifications.map(n => <Notification key={`notification-${n.id}`} {...n} />)}

                  <Dropdown.Item className="text-center text-primary fw-bold py-3">
                    View all
                  </Dropdown.Item>
                </ListGroup>
              </Dropdown.Menu> */}
            </Dropdown>

            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  <Image src={Profile3} className="user-avatar md-avatar rounded-circle" />
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold">{user.firstname}</span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faUserCircle} className="me-2" /> 
                  <Link to='/Myaccount' >My Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" /> Messages
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faUserShield} className="me-2" /> Support
                </Dropdown.Item>

                <Dropdown.Divider />

                <Dropdown.Item className="fw-bold" onClick={helperService.logOut} >
                  <FontAwesomeIcon icon={faSignOutAlt}  className="text-danger me-2" /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
 
  )
}
