// import { useHistory } from "react-router-dom";
  
export const callAboutPage= async(history)=>{
    // const history = useHistory();
        try {
          const res = await fetch("/about", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            credentials: "include"
          });
    
          const data = await res.json();
          console.log(data);
          if (!res.status === 200) {
            // throw new Error();
            const error = new Error(res.error);
            throw error;
    
          }
        } catch (error) {
          console.log(error);
          history.push("/login")
        }
      }

