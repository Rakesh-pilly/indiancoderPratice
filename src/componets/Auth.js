import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Auth = () => {
    const [isSignup, setIsSigUp] = useState(false);
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e)=> {
        
        setInput(prev => (
            {...prev,
                [e.target.name] : e.target.value

            }
        ))
    }

  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "SignUP" : "Login"}
          </Typography>

         {isSignup && <TextField variant="outlined" placeholder="Name"
            type = {'text'}
            margin = "normal"
            name = "name"
            value = {input.name}
            onChange = {handleChange}
          /> }

          <TextField variant="outlined"
          type = {"email"}
          placeholder="Email"
          margin = "normal"
          name = "email"
          value =  {input.email}
          onChange = {handleChange}

          />

          <TextField variant="outlined" 
          type={'password'}
          margin = "normal"
          name = "password"
            placeholder="Password"
            value = {input.password}
            onChange = {handleChange}

          />

          <Button
          variant="contained"
          color="warning"
          sx = {{marginTop : 3,
            borderRadius : 3
        }}
          >
            {isSignup ? "Signup" : "Login"}
          </Button>

<Button
          variant="outlined"
         
          sx = {{marginTop : 3,
            borderRadius : 3
        }}

        onClick = {()=> setIsSigUp(pre => !pre)}
          >
           Change To {isSignup ? "Login" : "SignUp"}
          </Button>

          
        </Box>
      </form>
    </div>
  );
};

export default Auth;
