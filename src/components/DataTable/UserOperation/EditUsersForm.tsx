import {
  ChangeEvent,
  CSSProperties,
  Dispatch,
  FormEvent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "@/features/usersSlice";
import { IUser } from "@/types/User";
import { useOutsideDetect } from "@/utils/useOutsideDetect";
import styles from "@/components/DataTable/UserOperation/UserOperation.module.scss";

interface EditUsersFormProps {
  employee: IUser;
  closeForm: () => void;
  setCloseForm: Dispatch<SetStateAction<boolean>>;
}

interface CustomStyle extends CSSProperties {
  "--card-top-margin"?: string;
}

export const EditUsersForm = ({
  employee,
  closeForm,
  setCloseForm,
}: EditUsersFormProps) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ ...employee });

  const wrapperRef = useRef(null);
  useOutsideDetect({ ref: wrapperRef, setIsOpen: setCloseForm });

  const onUserFieldsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onUserEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser(formData));
    closeForm();
  };

  return (
    <form
      onSubmit={(e) => onUserEdit(e)}
      ref={wrapperRef}
      className={styles.formContainer}
      style={
        {
          "--card-top-margin": "-17%",
        } as CustomStyle
      }
    >
      <h2>Edit Employee</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => onUserFieldsChange(e)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => onUserFieldsChange(e)}
          disabled
        />
      </label>
      <label>
        Status:
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={(e) => onUserFieldsChange(e)}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={(e) => onUserFieldsChange(e)}
        />
      </label>
      <label>
        Place:
        <input
          type="text"
          name="place"
          value={formData.place}
          onChange={(e) => onUserFieldsChange(e)}
        />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={closeForm} className={styles.closeButton}>
        Cancel
      </button>
    </form>
  );
};
