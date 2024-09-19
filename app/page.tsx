import { ReactElement } from "react";
import styles from "./page.module.css";
import type { Metadata } from "next";
import Htag from "@/components/Htag/Htag";
import Button from "@/components/Button/Button";

// export const metadata: Metadata = {
//   title: "Главная",
//   description: "Описание главной страницы",
// };



export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Генерация метаданных",
    description: "Описание главной страницы",
  };
}

export default function Home(): ReactElement {
  return (
    <div className={styles.page}>
      <Htag tag='h1'>Текст</Htag>
      <Htag tag='h2'>Тестовый заголовок</Htag>
      <Htag tag='h2'>Тестовый заголовок 2</Htag>
      <Button appearance='primary' className='test'>Кнопка</Button>
      <Button appearance='secondary'>Кнопка</Button>
      <p>Тест</p>
    </div>
  );
}
