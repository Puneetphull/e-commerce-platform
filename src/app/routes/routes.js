export const customRoutes = {
  adminSignup:  {path:'/admin/register/app'},
  userSignUp:   { path:'/register/user'},
  staffSignup:  {path:'/register/staff'},
  guestSignup:{path:'/register/guest'},
  adminDetail:{path:'/admin/auth/profile'},
  userDetail:{path:'/user/auth/profile'},
  staffDetail:{path:'/staff/auth/profile'},
  guestDetail:{path:'/guest/auth/profile'},


  adminHome:{path:'/admin/panel/home'},
  UserHome:{path:'/user/home'},
  StaffHome:{path: '/staff/home'},
  guestHome:{path:'/guest/home'},



  pageNotFound :  {path:'/http/400'},
  serverError:  {path:'/http/500'},
  adminLogin: {path:'/main/admin/login'},
  userLogin: {path:'/main/login/user'},
  staffLogin: {path:'/main/login/staff'},
  resetPassword : {path:'resetpassword'},



  //other Pages


  bookAppointmentPage:{path:'/home/bookappointment'},
  appointmentListPage:{path:'/home/appointmentlist'},
  appointmentCalendarPage :{path:'/home/appointmentCalendar'},
  doctorList:{path:'/home/doctorlist'},
  patientList:{path:'/home/patientlist'},
  taskList:{path:'/home/tasklist'},
  kanbanPage:{path:'/home/kanban'},
  invoicePage:{path:'/home/invoice'},
  settingPage:{path:'/home/setting'},

}