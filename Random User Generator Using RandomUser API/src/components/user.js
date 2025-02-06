const getUser = async () => {
  const userResponse = await fetch("https://randomuser.me/api/" , {method : "GET"})
  return userResponse.json();
}

export default getUser