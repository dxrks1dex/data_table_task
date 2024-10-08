import styles from "@/components/DataTable/DataTable.module.scss";
import Image from "next/image";
import { checkStatusColor } from "@/features/checkStatusColor";
import { CSSProperties } from "react";
import { IUser } from "@/types/User";
import { checkOperationColor } from "@/features/checkOperationColor";

interface CustomStyle extends CSSProperties {
  "--user-status-color"?: string;
  "--user-operation-color"?: string;
}

interface UserProps {
  index: number;
  handleEdit: (email: IUser) => void;
  handleDelete: (email: string) => void;
  employee: IUser;
}

export const User = ({
  employee,
  index,
  handleEdit,
  handleDelete,
}: UserProps) => {
  return (
    <tr key={`${employee.email}-${index}`}>
      <td>
        <div className={styles.userName}>
          <Image src={employee.avatar} alt="" />
          {employee.name}
        </div>
      </td>
      <td>{employee.email}</td>
      <td
        className={styles.employeeStatus}
        style={
          {
            "--user-status-color": checkStatusColor(employee.status),
          } as CustomStyle
        }
      >
        {employee.status}
      </td>
      <td>{employee.role}</td>
      <td>
        <div className={styles.editSection}>
          <svg
            onClick={() => handleEdit(employee)}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={
              {
                "--user-operation-color": checkOperationColor({
                  operation: "edit",
                }),
              } as CustomStyle
            }
          >
            <path
              d="M18 2L22 6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 20.5L19 9L15 5L3.5 16.5L2 22L7.5 20.5Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            onClick={() => handleDelete(employee.email)}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={
              {
                "--user-operation-color": checkOperationColor({
                  operation: "delete",
                }),
              } as CustomStyle
            }
          >
            <path
              d="M3 6H5H21"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 11V17"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 11V17"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </td>
    </tr>
  );
};
