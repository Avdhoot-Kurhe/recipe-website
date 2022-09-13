function navbar(){
    let login=JSON.parse(localStorage.getItem("login"));
   
    if(login!==null){
        return`
    <h3><a href="index.html">Home</a></h3>
    <div id="option">
        <h3><a href="Day.html">Recipe Of Day</a></h3>
        <h3><a href="#">${login.userName}</a></h3>
        </div>
        
    </div>`
    }else{
        return ` 
        <h3><a href="index.html">Home</a></h3>
        <div id="option">
            <h3><a href="Day.html">Recipe Of Day</a></h3>
            <h3><a href="login.html">Login</a> </h3>
            <h3><a href="signup.html">Sign Up</a></h3>
            
        </div>`;
    }
    
}

export default navbar;
