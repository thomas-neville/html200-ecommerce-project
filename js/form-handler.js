// form handling function
function nameEmailInterest(){

  //prevent form from submitting
  event.preventDefault()  
  
  // assign variables to user input
  var userName = document.userInfo.userName.value
  var userEmail = document.userInfo.userEmail.value
  var userInterest = document.userInfo.userInterest.value
  
  // console log results to test, commenting out for final version
  // console.log(userName)
  // console.log(userEmail)
  // console.log(userInterest)
  
  //console log message to user
  console.log("Thank you, " + userName + ". The email address, " + userEmail + " will now receive information about " + userInterest + ".")
}