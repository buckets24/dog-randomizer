// https://emailvalidation.abstractapi.com/v1/?api_key=48f83ab677ac40cdaf1a261f7ac5b23e&email=cncarpio@gmail

export const validateEmail = async (email: string) => {
  const url = new URL('https://emailvalidation.abstractapi.com/v1/')
  url.searchParams.set("api_key", String(process.env.REACT_APP_EMAIL_API_KEY))
  url.searchParams.set('email', email)

  const response = await fetch(url)
  const data = await response.json()

  console.log(data?.deliverability, `data`)

  return {
    isValid: data?.deliverability === "DELIVERABLE" 
  }
}