// function success(){
//   Swal.fire(
//     'Good job!',
//     'Successfully Submitted',
//     'success'
//   ) 
// }


function validate(){
  user_name=document.getElementById("name").value
  user_email=document.getElementById("email").value
  user_membership=document.getElementById("membership").value

  if (user_name!="" && user_email!="" &&user_membership!="" )
  {
    Swal.fire(
          'Good job!',
          'Successfully Submitted',
          'success'
         ) 
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }

}