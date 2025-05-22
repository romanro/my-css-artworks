import { Seasun } from '@/artwork-components/Seasun/Seasun';
import { Logo } from '@/components/Logo/Logo';

export default function Home() {
    return (
        <div className='relative flex justify-center items-center h-screen w-screen'>
            <div className='absolute top-0 left-0 w-full h-full -z-10'>
                <Seasun />
            </div>
            <Logo />
        </div>
    );
}
