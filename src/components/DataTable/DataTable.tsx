import { useDispatch, useSelector } from "react-redux";
import styles from "./DataTable.module.scss";
import { setSortKey } from "@/features/sortSlice";
import { removeUser } from "@/features/usersSlice";
import { useState } from "react";
import { filterUsers } from "@/features/sortedUsers";
import { ArrowDownIcon, ArrowUpIcon } from "@/components/icons/ArrowsIcon";
import { User } from "@/components/DataTable/User";
import { IUser } from "@/types/User";
import { EditUsersForm } from "@/components/DataTable/UserOperation/EditUsersForm";
import { RootState } from "@/features/store";

export const DataTable = () => {
  const dispatch = useDispatch();
  const sortConfig = useSelector((state: RootState) => state.sort);
  const [selectedEmployee, setSelectedEmployee] = useState<IUser | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { users, searchQuery } = useSelector((state: RootState) => state.users);

  const sortedUsers = [...filterUsers({ users, searchQuery })].sort((a, b) => {
    if (sortConfig.key === null) {
      return 0;
    }
    const aVal = a[sortConfig.key].toLowerCase();
    const bVal = b[sortConfig.key].toLowerCase();
    if (aVal < bVal) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (aVal > bVal) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key: string) => {
    dispatch(setSortKey({ key }));
  };

  const handleDelete = (email: string) => {
    dispatch(removeUser(email));
  };

  const handleEdit = (employee: IUser) => {
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const closeEditForm = () => {
    setIsEditing(false);
    setSelectedEmployee(null);
  };

  const arrowsParams = {
    width: "12px",
    fill: "#B1B1B1",
    height: "12px",
  };

  return (
    <div>
      {isEditing && selectedEmployee && (
        <EditUsersForm
          employee={selectedEmployee}
          closeForm={closeEditForm}
          setCloseForm={setIsEditing}
        />
      )}
      <table className={styles.employeeTable}>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              Name{" "}
              {sortConfig.key === "name" ? (
                sortConfig.direction === "ascending" ? (
                  <ArrowUpIcon
                    width={arrowsParams.width}
                    fill={arrowsParams.fill}
                    height={arrowsParams.height}
                  />
                ) : (
                  <ArrowDownIcon
                    width={arrowsParams.width}
                    fill={arrowsParams.fill}
                    height={arrowsParams.height}
                  />
                )
              ) : (
                <ArrowDownIcon
                  width={arrowsParams.width}
                  fill={arrowsParams.fill}
                  height={arrowsParams.height}
                />
              )}
            </th>
            <th onClick={() => handleSort("email")}>
              Email{" "}
              {sortConfig.key === "email" ? (
                sortConfig.direction === "ascending" ? (
                  <ArrowUpIcon
                    width={arrowsParams.width}
                    fill={arrowsParams.fill}
                    height={arrowsParams.height}
                  />
                ) : (
                  <ArrowDownIcon
                    width={arrowsParams.width}
                    fill={arrowsParams.fill}
                    height={arrowsParams.height}
                  />
                )
              ) : (
                <ArrowDownIcon
                  width={arrowsParams.width}
                  fill={arrowsParams.fill}
                  height={arrowsParams.height}
                />
              )}
            </th>
            <th onClick={() => handleSort("status")}>
              Status{" "}
              {sortConfig.key === "status" ? (
                sortConfig.direction === "ascending" ? (
                  <ArrowUpIcon
                    width={arrowsParams.width}
                    fill={arrowsParams.fill}
                    height={arrowsParams.height}
                  />
                ) : (
                  <ArrowDownIcon
                    width={arrowsParams.width}
                    fill={arrowsParams.fill}
                    height={arrowsParams.height}
                  />
                )
              ) : (
                <ArrowDownIcon
                  width={arrowsParams.width}
                  fill={arrowsParams.fill}
                  height={arrowsParams.height}
                />
              )}
            </th>
            <th onClick={() => handleSort("role")}>
              Role{" "}
              {sortConfig.key === "role" ? (
                sortConfig.direction === "ascending" ? (
                  <ArrowUpIcon
                    width={arrowsParams.width}
                    fill={arrowsParams.fill}
                    height={arrowsParams.height}
                  />
                ) : (
                  <ArrowDownIcon
                    width={arrowsParams.width}
                    fill={arrowsParams.fill}
                    height={arrowsParams.height}
                  />
                )
              ) : (
                <ArrowDownIcon
                  width={arrowsParams.width}
                  fill={arrowsParams.fill}
                  height={arrowsParams.height}
                />
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((employee, index) => (
            <User
              key={employee.email}
              employee={employee}
              index={index}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
