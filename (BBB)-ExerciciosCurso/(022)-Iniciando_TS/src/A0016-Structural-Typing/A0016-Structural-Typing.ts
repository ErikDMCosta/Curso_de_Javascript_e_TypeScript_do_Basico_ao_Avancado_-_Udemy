type VerifyUserFn = (user: User, setValue: User) => boolean;
type User = { username: String; password: String };

const verifyUser: VerifyUserFn = (user, setValue) => {
  return (
    user.username === setValue.username && user.password === setValue.password
  );
};

const bdUSer = { username: 'joao', password: '123456' };
const sentUSer = { username: 'joao', password: '123456', permissions: '' };
const loggedIn = verifyUser(bdUSer, sentUSer);
console.log(loggedIn);
