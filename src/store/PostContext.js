import { createContext,useState } from "react";

export const PostContext = createContext(null)
const [postDetails, setPostDetails] = useState(second)
function Post ({children}) {
    return(
        <PostContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </PostContext.Provider>
    )
}
export default Post