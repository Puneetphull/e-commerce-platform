import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import  SimpleBar from 'simplebar-react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt, faTimes,  faMoneyCheckDollar,faTooth, faDollarSign, faGear, faShoppingCart ,faBagShopping, faTruckFast, faUser, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Dropdown, Navbar } from '@themesberg/react-bootstrap';
import Company_logo from '../assets/Logo/favicon-16x16.png';
import { Link } from 'react-router-dom';
import { customRoutes } from '../routes/routes';


// import { Routes } from "../routes";
// import ThemesbergLogo from "../assets/img/themesberg.svg";
// import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
// import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";
export function Sidebar(props) {
    const location = useLocation();
    const { pathname } = location;
  
    const [show, setShow] = useState(true);
   
    const onCollapse = () => setShow(!show);
 
  
  
    const NavItem = (props) => {
      const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
      const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
      const navItemClassName = link === pathname ? "active" : "";
      const linkProps = external ? { href: link } : { as: Link, to: link };
  
      return (
        <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
          <Nav.Link {...linkProps} target={target} className={classNames}>
            <span>
              {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
              {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}
  
              <span className="sidebar-text">{title}</span>
            </span>
            {badgeText ? (
              <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
            ) : null}
          </Nav.Link>
        </Nav.Item>
      );
    };
  
    return (
      <>
        <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
          <Navbar.Brand className="me-lg-5" as={Link} to="" >
            <Image src=""  className="navbar-brand-light" />
          </Navbar.Brand>
          <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
            <span className="navbar-toggler-icon" />
            Hello
          </Navbar.Toggle>
        </Navbar>
        <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
          <SimpleBar className={`${props.show ? "contracted" : ""} sidebar d-md-block bg-primary text-white collapse`}>
            <div className="sidebar-inner px-4 pt-3">
              <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                <div className="d-flex align-items-center">
                  <div className="user-avatar lg-avatar me-4">
                    <Image src="" className="card-img-top rounded-circle border-white" />
                  </div>
                  <div className="d-block">
                    <h6>Hi, Jane</h6>
                    <Button as={Link} variant="secondary" size="xs" to="" className="text-dark">
                      <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                    </Button>
                  </div>
                </div>
                <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                  <FontAwesomeIcon icon={faTimes} />
                </Nav.Link>
              </div>
              <Nav className="flex-column pt-3 pt-md-0">
                <NavItem title="E-Commerce" link="" image={Company_logo} />  
                <NavItem title="Home" link={customRoutes.adminHome.path} icon={faShoppingCart} />
                <NavItem title="Product List" link="/productlisting" icon={faShoppingCart} />
                <NavItem title="Product Detail" link="/productdetail" icon={faShoppingBag} />
                <NavItem title="Cart" link="/cart" icon={faShoppingCart}/>
                <NavItem title="Shipping Information" link="/shipping" icon={faTruckFast}/>
                <NavItem title="Payment" link="/payment" icon={faMoneyCheckDollar}/>
                {/* <NavItem title="Product Detail" link="/productdetail" icon={faDollarSign} />
                <NavItem title="Cart" link="/cart" icon={faShoppingCart}/>
                
                <NavItem title="Personal Information" link={customRoutes.taskList.path} icon={faUser}/>
         
                <NavItem title="Order History" link={customRoutes.invoicePage.path} icon={faBagShopping}/>
                <NavItem title="Settings" link={customRoutes.settingPage.path} icon={faGear}/> */}
               
                {/* <NavItem external title="Messages" link="https://demo.themesberg.com/volt-pro-react/#/messages" target="_blank" badgeText="Pro" icon={faInbox} />
                <NavItem title="Transactions" icon={faHandHoldingUsd} link="" />
                <NavItem title="Settings" icon={faCog} link="" /> */}
                {/* <NavItem external title="Calendar" link="https://demo.themesberg.com/volt-pro-react/#/calendar" target="_blank" badgeText="Pro" icon={faCalendarAlt} />
                <NavItem external title="Map" link="https://demo.themesberg.com/volt-pro-react/#/map" target="_blank" badgeText="Pro" icon={faMapPin} /> */}
  
                {/* <CollapsableNavItem eventKey="tables/" title="Tables" icon={faTable}>
                  <NavItem title="Bootstrap Table" link="" />
                </CollapsableNavItem> */}
  
                {/* <CollapsableNavItem eventKey="examples/" title="Page Examples" icon={faFileAlt}>
                  <NavItem title="Sign In" link="" />
                  <NavItem title="Sign Up" link="" />
                  <NavItem title="Forgot password" link="" />
                  <NavItem title="Reset password" link="" />
                  <NavItem title="Lock" link="" />
                  <NavItem title="404 Not Found" link="" />
                  <NavItem title="500 Server Error" link="" />
                </CollapsableNavItem> */}
  
               {/* <NavItem external title="Plugins" link="https://demo.themesberg.com/volt-pro-react/#/plugins/datatable" target="_blank" badgeText="Pro" icon={faChartPie} /> */}
  
                <Dropdown.Divider className="my-3 border-indigo" />
  
                {/* <CollapsableNavItem eventKey="documentation/" title="Getting Started" icon={faBook}>
                  <NavItem title="Overview" link="" />
                  <NavItem title="Download" link="" />
                  <NavItem title="Quick Start" link="" />
                  <NavItem title="License" link="" />
                  <NavItem title="Folder Structure" link="" />
                  <NavItem title="Build Tools" link="" />
                  <NavItem title="Changelog" link="" />
                </CollapsableNavItem> */}
                {/* <CollapsableNavItem eventKey="components/" title="Components" icon={faBoxOpen}>
                  <NavItem title="Accordion" link="" />
                  <NavItem title="Alerts" link="" />
                  <NavItem title="Badges" link="" />
                  <NavItem external title="Widgets" link="https://demo.themesberg.com/volt-pro-react/#/components/widgets" target="_blank" badgeText="Pro" />
                  <NavItem title="Breadcrumbs" link="" />
                  <NavItem title="Buttons" link="" />
                  <NavItem title="Forms" link="" />
                  <NavItem title="Modals" link="" />
                  <NavItem title="Navbars" link="" />
                  <NavItem title="Navs" link="" />
                  <NavItem title="Pagination" link="" />
                  <NavItem title="Popovers" link="" />
                  <NavItem title="Progress" link="" />
                  <NavItem title="Tables" link="" />
                  <NavItem title="Tabs" link="" />
                  <NavItem title="Toasts" link="" />
                  <NavItem title="Tooltips" link="" />
                </CollapsableNavItem> */}
                {/* <NavItem external title="Themesberg" link="https://themesberg.com" target="_blank" image="" /> */}
                {/* <Button as={Link} to="" variant="secondary" className="upgrade-to-pro"><FontAwesomeIcon icon={faRocket} className="me-1" /> Upgrade to Pro</Button> */}
              </Nav>
            </div>
          </SimpleBar>
        </CSSTransition>
    
      </>
    );
}
