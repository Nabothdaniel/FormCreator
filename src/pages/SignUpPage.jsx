import Header from "../components/Header";
import SignUp  from "../components/SignUp";

const SignUpPage = () => {
    return (
        <div className="flex  justify-center items-center mt-24">
            <section>
            <Header
                heading="Signup to create an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/"
            />
            <SignUp/>
            </section>
        </div>
    )
}

export default SignUpPage;