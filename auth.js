



class User {

    constructor(){

    }

    #checkUsername(username){

        let value = username.includes("#") ? false : true;
        return value;
    }

    #checkPassword(password){

        let value = password.length > 8 ? true : false;
        return value;
    }

    async signup(n,e,u,p,m,d){

       let isValidated = this.#checkUsername(u) && this.#checkPassword(p);
            
       if(isValidated){
            this.name = n;
            this.email = e;
            this.username = u;
            this.password = p;
            this.mobile = m;
            this.desciption = d;

            let actual_data = JSON.stringify(this);

            try{
                let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
                    method: "POST",

                    body: actual_data,

                    headers: {
                        "content-Type": "application/json",
                    },
                });

                let data = await res.json();
                console.log("data:",data);

                console.log("User registered successfully")

            }
            catch(error){
                console.log("error:",error);
            }

            
        }
    }

    async Log_in(u,p){

        this.username = u;
        this.password = p;

        let login_data = JSON.stringify(this);

        const login_ulr = `https://masai-api-mocker.herokuapp.com/auth/login`;

    let res = await fetch(login_ulr,{
        method: "POST",

        body: JSON.stringify(login_data),

        headers: {
            "Content-Type": "application/json",
        },
    });
    let data = await res.json();
    // let token = data.token;
    // getProfile(login_data.username,token)
    console.log("data:",data);

    // window.location.href = "index.html"
    }

}

let u1 = new User()

function Register(){

    const name  = document.getElementById("name").value;
    const email  = document.getElementById("email").value;
    const username  = document.getElementById("username").value;
    const password  = document.getElementById("password").value;
    const mobile  = document.getElementById("mobile").value;
    const description  = document.getElementById("description").value;

    u1.signup(name,email,username,password,mobile,description);


}

function Login(){

    const username  = document.getElementById("username").value;
    const password  = document.getElementById("password").value;

    u1.Log_in(username,password);


}