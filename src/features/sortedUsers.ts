import { IUser } from "@/types/User";

interface filterUsersProps {
  users: IUser[];
  searchQuery: string;
}

export const filterUsers = ({ users, searchQuery }: filterUsersProps) => {
  if (searchQuery.length === 0) {
    return [];
  }

  return users.filter((user) => {
    const place = user.place.toLowerCase();
    const query = searchQuery.toLowerCase();

    return (
      place.includes(query) &&
      (place === query || place.split(" ").includes(query))
    );
  });
};
