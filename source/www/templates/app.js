function auth() {
                    var log=document.getElementById('logg').value;
                    var pass=document.getElementById('passs').value;
                if(log=="admin"&&pass=="admin")
                    {
                        
                        window.location="shareup.html";
                    }
                else
                    {
                        alert("invalid username/password");
                    }}