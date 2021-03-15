    import googleImage from "../assets/imageGoogle.jpg";
    import githubLogo from "../assets/githubLogo.webp";
    import twitterLogo from "../assets/twitterLogo.png";
    import "./LoginPage.css";

    const LoginPage = () => {
    const googleLogin = () => {
        window.open("http://localhost:4000/auth/google", "_self");
    };

    const githubLogin = () => {
        window.open("http://localhost:4000/auth/github", "_self");
    };

    const twitterLogin = () => {
        window.open("http://localhost:4000/auth/twitter", "_self");
    };

    return (
        <div className="loginPage">
        <div className="loginForm">
            <h1 className="text-center text-warning mt-3 bm-4">Login</h1>
            <div className="googleContainer" onClick={googleLogin}>
            <img src={googleImage} alt="google transparent logo" />
            <p>Login with Google</p>
            </div>
            <div className="googleContainer githubContainer" onClick={githubLogin}>
            <img src={githubLogo} alt="github transparent logo" />
            <p>Login with GitHub</p>
            </div>
            <div
            className="googleContainer twitterContainer"
            onClick={twitterLogin}
            >
            <img src={twitterLogo} alt="twitter transparent logo" />
            <p>Login with Twitter</p>
            </div>
        </div>
        </div>
    );
    };

    export default LoginPage;
