import styles from '../styles/Disciplines.module.css';
import MainLayout from "../components/MainLayout";
import { DisciplinesMath } from "../data/DisciplinesMath";
import DisciplinesItem from "../components/DisciplinesItem";

const DisciplinesPage = () => {
    return (
      <>
        <MainLayout>
          <div className={styles.container}>
            <div className={styles.content}>
          {DisciplinesMath.map((discipline) => (
            <DisciplinesItem 
            img={discipline.img} 
            title={discipline.title} 
            description={discipline.description} 
            price={discipline.price}/>
          ))}
            </div>
          </div>
        </MainLayout>
      </>
    );
  }
  export default DisciplinesPage