import logo from '../assets/Logo.svg';

function Header() {
    return (
        <div>
            <meta name="description" content="This is the website for the Little Lemon restaurant"/>
            <meta name="og:title" content="Little Lemon restaurant"/>
            <meta name="og:description" content="The Little Lemon Restaurant specialises in modern Mediterranean cuisine"/>
            <meta name="og:image" content={logo}/>
        </div>
    );
}

export default Header;