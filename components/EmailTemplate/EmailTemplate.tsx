
interface Props {
    // email: IEmail
    email: string
}

export default function Emailtemplate({email}: Props){
    return(
        <>
            <p>asd{email}</p> 
        </>)
}