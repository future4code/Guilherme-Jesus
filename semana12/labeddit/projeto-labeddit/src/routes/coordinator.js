export const goToLogin = (history) => {
    history.push('/login')
}
export const goToSignUp = (history) => {
    history.push("/cadastro")
}
export const goToPost = (history, id) => {
    history.push(`/posts/${id}/comments`)
}
export const goToFeed = (history) => {
    history.push('/')
}
export const goToAddPost = (history) =>
history.push('/posts')