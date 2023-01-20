var user = "testprep";

switch (user) {
    case "admin":
      console.log("gets access to create/delete courses");    
        break;
    
    case "subadmin":
      console.log("You get full access");    
        break; 
    
    case "testprep":
      console.log("gets access to create/delete courses");    
        break;
    
    case "user":
      console.log("gets access to consume content");    
        break;       

    default:
      console.log("Trial user");  
        break;
}