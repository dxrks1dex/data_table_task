import React, {
  CSSProperties,
  Dispatch,
  FormEvent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserOperation.module.scss";
import { addUser } from "@/features/usersSlice";
import { avatars } from "@/pictures/avatars";
import Image from "next/image";
import { useOutsideDetect } from "@/utils/useOutsideDetect";
import { RootState } from "@/features/store";

interface AddUserFormProps {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}

interface CustomStyle extends CSSProperties {
  "--card-top-margin"?: string;
}

export const AddUserForm = ({ setShowForm }: AddUserFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("Free");
  const [role, setRole] = useState("");
  const [place, setPlace] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const users = useSelector((state: RootState) => state.users.users);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const wrapperRef = useRef(null);
  useOutsideDetect({ ref: wrapperRef, setIsOpen: setShowForm });

  const onAddNewUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailExists = users.some((user) => user.email === email);
    if (emailExists) {
      setErrorMessage("This email is already using.");
      return;
    }

    const newUser = {
      name,
      email,
      status,
      role,
      place,
      avatar: selectedAvatar,
    };

    dispatch(addUser(newUser));

    setName("");
    setEmail("");
    setStatus("Free");
    setRole("");
    setPlace("");
  };

  return (
    <form
      onSubmit={(e) => onAddNewUser(e)}
      className={styles.formContainer}
      ref={wrapperRef}
      style={
        {
          "--card-top-margin": "7%",
        } as CustomStyle
      }
    >
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={name}
          placeholder={"Name"}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="email"
          value={email}
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className={styles.errorMessage}>{errorMessage}</div>
      </div>
      <div className={styles.inputGroup}>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Free">Free</option>
          <option value="Busy">Busy</option>
          <option value="Workin">Workin</option>
          <option value="On Vacation">On Vacation</option>
          <option value="Working">Working</option>
        </select>
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={role}
          placeholder={"Role"}
          onChange={(e) => setRole(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={place}
          placeholder={"Place in company"}
          onChange={(e) => setPlace(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.avatarSelection}>
          {avatars.map((avatar, index) => (
            <div key={index} className={styles.avatarOption}>
              <Image
                src={avatar}
                alt={`Avatar ${index + 1}`}
                onClick={() => setSelectedAvatar(avatar)}
                className={
                  selectedAvatar === avatar ? styles.selectedAvatar : ""
                }
              />
            </div>
          ))}
        </div>
      </div>
      <button type="submit" className={styles.addButton}>
        Add User
      </button>
    </form>
  );
};
