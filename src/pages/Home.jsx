// Base imports
import { useState } from "react";

// Components

// CSS
import "./pageStyling/home.css"

// Images
import textureOne from "../assets/images/textures/xv.png";
import scenicBck from "../assets/images/background/scenic.avif";
import pinstripe from "../assets/images/textures/pinstripe-light.png";
import webImg from "../assets/images/background/website1.jpg";


export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <div className="page-container">
            <header
            className="intro-container"
            style={{ backgroundImage: `url(${textureOne})` }}>                
                <h1>Where a website is from</h1>
                <p>From Michael Yurachek</p>
            </header>
            <section className="start-container">
                <p>
                    I am from the early internet,<br/>
                    from blank pages and blinking cursors,<br/>
                    from the first lines of code<br/>
                    typed carefully into a screen<br/>
                    when websites were only meant<br/>
                    to share information.<br/>
                    <br/>
                    I am from simple tags<br/>
                    <span className="edge">&lt;</span>
                    <span className="inside">html</span>
                    <span className="edge">&gt;</span> opening the page<br/>
                    and 
                    <span className="edge">&lt;</span>
                    <span className="inside">body</span>
                    <span className="edge">&gt;</span> holding everything together,<br/>
                    text sitting quietly<br/>
                    on plain white backgrounds.<br/>
                </p>
            </section>
            <header 
            className="header-container"
            style={{ backgroundImage: `url(${scenicBck})` }}>
                <h2>Hello, I am a header! 👋</h2>
                <p>
                    At the top of my page<br/>
                    there is a header.<br/>
                    <br/>
                    A title stretches across the screen,<br/>
                    navigation links stand in a row,<br/>
                    colors and fonts chosen carefully<br/>
                    to say this is who I am.<br/>
                    <br/>
                    The header is the greeting<br/>
                    of the website.<br/>
                </p>
            </header>
            <main id="main-content">
                <section className="simple-container">
                    <h3 className="simple-question">How to make website?</h3>
                    <p>
                        Below it is where learning begins<br/>
                        a small section with a simple page,<br/>
                        barely any CSS,<br/>
                        just paragraphs, spacing,<br/>
                        and a beginner discovering<br/>
                        how a website works.<br/>
                        <br/>
                        Further down sits a small project<br/>
                        a button and a number above it.<br/>
                    </p>
                    <h3 className="simple-text">Where to code?</h3>
                </section>
                <section className="clicker-container"
                style={{ backgroundImage: `url(${pinstripe})` }}>
                    <div className="clicker-holder">
                        <h2 className="clicker-counter">{count}</h2>
                        <div className="clicker-button-holder">
                            <button onClick={() => setCount(count + 1)} className="clicker-button click-btn">
                            Click Me
                            </button>
                            <button onClick={() => setCount(0)} className="clicker-button reset-btn">
                            Reset
                            </button>
                        </div>
                    </div>
                    <div className="clicker-poem">
                        <p>
                            Click.<br/>
                            <br/>
                            The number becomes one.<br/>
                            Click again two, three, four<br/>
                            a counter rising with every press,<br/>
                            JavaScript quietly listening<br/>
                            behind the screen.<br/>
                        </p>
                    </div>
                </section>
                <section className="writing-container">
                    <div className="writing-poem">
                        <p>
                            Then comes a section of writing,<br/>
                            an article with a bold heading,<br/>
                            lines of text sharing an idea,<br/>
                            proving a webpage<br/>
                            can be more than code.<br/>
                        </p>
                    </div>
                    <header className="fake-news">
                        <h1>WEB NEWS</h1>
                    </header>
                    <article className="article-section">
                        <div className="article-left">
                            <h1>Where Code Begins: The Shape of Digital Origins</h1>
                            <h3><i>By Elena Marrow</i></h3>
                            <p>
                                Every website begins in fragments.
                                <br/><br/>
                                A line of code, a small idea, a decision made late at night—each piece adds up to something more than structure. It becomes a reflection. Not just of what was built, but of who built it.
                                <br/><br/>
                                There are mistakes hidden in the margins. Broken lines. Things rewritten over and over again. But those pieces matter. They show the process—the origin.
                                <br/><br/>
                                What we create online isn’t separate from us. It carries our habits, our thoughts, our way of seeing things.
                                <br/><br/>
                                In the end, a website is more than code.
                                <br/><br/>
                                It is where something began.
                            </p>
                        </div>
                        <div className="article-right">
                            <img src={webImg} />
                        </div>
                    </article>
                </section>
            </main>
            <footer className="footerEx-container">
                <p>
                    And at the very bottom<br/>
                    the footer waits quietly<br/>
                    a few links, a small line of text,<br/>
                    the final place<br/>
                    where the page comes to an end.<br/>
                </p>
                <div className="footerEx-links">
                    <a className="footerEx-button" href="https://www.instagram.com/michael.yurachek/" target="_blank" rel="noopener noreferrer">
                        <button>Instagram</button>
                    </a>
                    <a className="footerEx-button" href="https://github.com/michaelyurachek" target="_blank" rel="noopener noreferrer">
                        <button>GitHub</button>
                    </a>
                    <a className="footerEx-button" href="https://www.linkedin.com/in/michael-yurachek-a873213b1/" target="_blank" rel="noopener noreferrer">
                        <button>LinkedIn</button>
                    </a>
                </div>
                <div className="footerEx-extras">
                    <a href="mailto:fake.email@gmail.com">Email Me</a>
                    <small>&copy; Michael Yurachek 2026</small>
                </div>
            </footer>
            <section className="end-container">
                <p>
                    I am from all of these pieces,<br/>
                    from the first simple websites<br/>
                    to the pages we build today.<br/>
                    <br/>
                    From headers and footers,<br/>
                    from curiosity written in HTML<br/>
                    and imagination styled in CSS<br/>
                    <br/>
                    I am from a webpage<br/>
                    still loading,<br/>
                    still growing,<br/>
                    still being built.<br/>
                </p>
            </section>
        </div>
    )
}