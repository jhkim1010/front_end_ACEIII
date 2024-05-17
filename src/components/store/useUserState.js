import { createContext } from 'react'



const userContext = createContext(null);

// function UserProvider({ children }) {
//   console.log(`[En UserProvider]; user = ${user}`)
//   return <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>
// }

// function useUserState() {
//   const context = useContext(userContext);
//   // console.log(`[En useUserState]; context = ${context}`)
//   console.log(context)
//   if (context === undefined) {
//     throw new Error('useUser must be used within a UserProvider');
//   }
//   return context;
// }

export default userContext; 
// module.exports = userContext; 
// export { userContext }
