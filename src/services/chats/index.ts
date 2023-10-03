const getChatList = async (idUser: string, accessToken: string, axiosJWT) => {
  try {
    const res = await axiosJWT.get(`http://localhost:3000/api/chat/chatList/${idUser}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const data = res.data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
export { getChatList };
