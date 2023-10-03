export type MessageType = {
  _id: string;
  sender: string;
  room: string;
  content: string;
  time: Date;
};
export type FormLogin = {
  username: string;
  password: string;
};
export type UserType = {
  _id: string;
  username: string;
  password: string;
  fullname: string;
  avatar: string;
  refreshToken: string;
  accessToken: string;
};
