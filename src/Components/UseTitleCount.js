import {useEffect} from "react";

const UseTitleCount = (count) => {
      useEffect(() => {
        console.log("hello i am first useEffect");
        if(count >= 1){
          document.title = `Chats(${count})`
        } else{
          document.title = "Chats"
        }
      }, [count]);
};

export default UseTitleCount;

//custom hooks