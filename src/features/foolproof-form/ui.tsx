import { Input } from "@nextui-org/react";
import styles from "./styles.module.scss";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const FoolproofForm = ({setCode}: {setCode: Dispatch<SetStateAction<number>>}) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputCode = e.currentTarget.value;
    setCode(Number(inputCode));
    localStorage.setItem("foolproofCode", inputCode)
  }

  return <div className={styles.wrapper}>
    <h1 className={styles.title}>Вход</h1>
    <Input onChange={handleChange} placeholder="Код" type="number"/>
  </div>
}