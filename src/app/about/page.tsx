import { ABOUT_ME_DESC, ROOT_METADATA } from '@/consts/rootMetadata.consts';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const title = `About Me: ${ROOT_METADATA.title}`;
    const keywords = ['About Author', 'About Roman Rozanov', 'About Creator', ...(ROOT_METADATA.keywords as string[])];
    return {
        ...ROOT_METADATA,
        title,
        keywords,
        description: ABOUT_ME_DESC,
    };
}

export default function AboutPage() {
    return (
        <div>
            <article>
                <h1>Hi, I’m Roman Rozanov</h1>
                <h2>
                    Welcome to <strong>Antifreez CSS Art</strong>, my creative corner where code meets art.
                </h2>
                <p>
                    {`I'm a front-end developer and tech lead with over 15 years of experience, specializing in CSS, HTML,
                    JavaScript, Angular, and React. My passion lies in pushing the limits of CSS to create unique
                    illustrations, animations, and interactive web experiences—all without relying on images or external
                    libraries.`}
                </p>
                <h2>My Journey</h2>
                <p>
                    With a background in graphic design, animation, and web development, I’ve always been fascinated by
                    how technology and creativity intersect.
                </p>
                <p>
                    Over the years, I’ve honed my skills in crafting seamless, optimized, and visually compelling web
                    solutions that not only function well but also tell a story.
                </p>
                <p>
                    Antifreez CSS Art is my personal project where I explore and share the artistic possibilities of
                    front-end development.
                </p>
                <h2>{`What You'll Find Here`}</h2>
                <h3>{`On this site, you'll discover:`}</h3>
                <ul>
                    <li>CSS Art & Experiments: Handcrafted illustrations and animations purely with CSS.</li>
                    <li>Creative Front-End Solutions: Exploring the boundaries of design and development.</li>
                    <li>Tips & Techniques: Insights into how I create visual magic with clean and efficient code.</li>
                </ul>
                <h2>Beyond Code</h2>
                <h3>When I’m not coding, you’ll find me indulging in my other passions:</h3>
                <ul>
                    <li>
                        {`Sailing my yacht, "Little Marie", exploring the open sea and enjoying the freedom it brings.`}
                    </li>
                    <li>Riding motorcycles, because nothing beats the thrill of the road.</li>
                </ul>
                <h2>{`Let's Connect`}</h2>
                <p>
                    {`I love collaborating with fellow developers, designers, and enthusiasts who share a passion for
                    creative coding. Feel free to reach out, explore my work, and let's make the web a more beautiful
                    place—one line of CSS at a time.`}
                </p>
            </article>
        </div>
    );
}
