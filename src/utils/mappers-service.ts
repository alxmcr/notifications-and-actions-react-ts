import { User } from '../@types/appTypes';
import { DbUser } from '../@types/serviceTypes';

export const mapperDbUserToAppUser = (dbUser: DbUser) => {
  const user: User = {
    id: dbUser.id,
    name: dbUser.name,
    email: dbUser.email,
  };

  return user;
};

export const bulkMapperUser = (dbUsers: DbUser[] = []) => {
  const mappedUsers: User[] = dbUsers.map((dbUser: DbUser) =>
    mapperDbUserToAppUser(dbUser),
  );

  return mappedUsers;
};
