import { Seasun } from '@/artwork-components/Seasun/Seasun';
import styles from './page.module.scss';

export default function Home() {
    return (
        <div className={`${styles.homePage} h-screen bg-sky-300 dark:bg-sky-950`}>
            <Seasun />
        </div>
    );
}
