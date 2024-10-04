"use server"

export const newVerification = async (token: string) => {
    try {
        console.log({token});
        
        if(!token) return { error: "Missing valid token"}
        if(+token !== 8) return { error: "Invalid token"}
        return { success: "Email verified"}
    } catch (error) {
        return null
    }
}