function validate(){
 let user_name=document.getElementById("name").value
 let user_email=document.getElementById("email").value
 let user_membership=document.getElementById("membership").value

Swal.fire(
       'Good job!',
       'Your Response Has Successfully Submitted',
       'success'
     ) 
}
