
import supabase, { supabaseUrl } from "./supabase"


export async function signup({ fullname, email, password }) {
    const { data, error } = await supabase.auth.signUp({
        email, password, options: {
            data: {
                fullname,
                avatar: ""
            }
        }
    })
    if (error) throw new Error(error.message)

    return data;
}

export async function login({ email, password }) {

    let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if (error) throw new Error(error.message)

    return data
}


export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null

    const { data, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message)

    return data?.user

}


export async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) throw new Error(error.message)
}


export async function updateCurrentUser({ password, fullname, avatar }) {
    let updateDate;
    if (password) updateDate = { password }
    if (fullname) updateDate = { data: { fullname } }

    const { data, error } = await supabase.auth.updateUser(updateDate)

    if (error) throw new Error(error.message)

    if (!avatar) return data;

    const fileName = `avatar-${data.user.id}-${Math.random()}`

    const { error: storageError } = await supabase.storage.from('avatars').upload(fileName, avatar)
    if (storageError) throw new Error(storageError.message)

    const { data: updateUser, error: error2 } = await supabase.auth.updateUser({
        data: {
            avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
        }
    })

    if (error2) throw new Error(error2.message)
    return updateUser
}
