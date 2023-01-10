 // ---------------------------------Register field-------------------------------------------------------
//  var btn =document.getElementById('btn').addEventListener("click", Register);
 function Register(){
    //  alert(" Working");

     var NameHTML = document.getElementById('name');
     if(NameHTML){
         var name =NameHTML.value;
        //  console.log('Name Woking');
     }
     var EmailHTML = document.getElementById('email');

     if(EmailHTML){
         var email =EmailHTML.value;
        //  console.log('Email Woking');
     }
     var PasswordHTML = document.getElementById('password');

     if(PasswordHTML){
         var password =PasswordHTML.value;
        //  console.log('Password Woking');
     }
     if(name && email && password){
         // alert('localstorage'); 
          localStorage.setItem("UserData",JSON.stringify({NameHTML:name, EmailHTML:email,PasswordHTML:password}));
          localStorage.setItem("isUserLoggedIn","false");
          alert("Register Done");
          window.location.href="./Login_Page.html";
     }else{
         alert("ERROR all the form fields are mandatory")`  `
     }

 }
 // ----------------------------------Login-Field-------------------------------------------------

//  var Email =document.getElementById('').addEventListener("click", Login);

 function Login(){
    //  alert("login work")
     var EmailHTML = document.getElementById("email");
     if(EmailHTML){
        var emailFromLogin =EmailHTML.value;
        console.log(emailFromLogin);
      
    }
     var passwordHTML = document.getElementById("password");
     if(passwordHTML){
        var passwordFromLogin =passwordHTML.value;
        console.log(passwordFromLogin);
    }

    if(emailFromLogin && passwordFromLogin){
        var dataFromLocal=localStorage.getItem("UserData");
        // console.log(dataFromLocal);

        var parsedData = JSON.parse(dataFromLocal);
        console.log(parsedData.EmailHTML,"parsedData.EmailHTML");

        if(emailFromLogin == parsedData.EmailHTML && passwordFromLogin == parsedData.PasswordHTML){
            localStorage.setItem("isUserLoggedIn","true");
            alert("logging successful !");
            window.location.href="./Home.html";
          

        }else{
            alert("Wrong cred !");
        }
        }else{
            alert("ERROR: Write all cred!")
        }

    }
    // -----------------------ADD CART Field-------------------------------------------------------------------------------
    
    function addCart(proId){
        // alert("Add to cart Working");

        var existingProducts = JSON.parse(localStorage.getItem("allProducts"));
        // console.log(existingProducts);
        if(existingProducts == null){existingProducts=[]} 

        // console.log(existingProducts, "existingProducts 1")

        var proPs = proId.querySelectorAll("p");
        var proName = proPs[0].innerText;
        // console.log(proName, "proName");
        // ------///
        var proImg = proId.querySelector("img").src;
        // console.log(proImg, "proImg");
        // ------//
         var proPrice = proPs[2].innerText;
        //  console.log(proPrice, "proPrice");
        //  ----------//
        var proObj = {pN:proName, pP:proPrice, pI:proImg};
        console.log(proObj);
        // --------//
        existingProducts.push(proObj);
        // console.log(existingProducts, "existingProducts 2");
        localStorage.setItem("allProducts", JSON.stringify(existingProducts));
        alert("Product added !");
    }
    