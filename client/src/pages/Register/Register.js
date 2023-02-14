import {Form} from "../../components/form/Form";
import {InputForm} from "../../components/form/InputForm";
import {personages} from "../../data/personages";
import {Row} from "../../common/row/row";
import {Col} from "../../common/col/col";
import {Title} from "../../components/title/Title";
import './styles.scss'
import {useDispatch, useSelector} from "react-redux";
import {updatePage} from "../../store/slices/game/game";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {addHero} from "../../store/slices/user/userSlice";


export const Register = (props) => {

    const {user} = useSelector(state => state)
    const [pseudo, setPseudo] = useState("")
    const [hero, setHero] = useState(user.hero)
    const [error, setError] = useState("")


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pseudo.length < 30) {
            dispatch(updatePage("rules"))
            dispatch(addHero({hero, pseudo}))
            navigate('/rules')
        }
    }

    const handleChange = (e) => {
        setPseudo(e.target.value)
        if (e.target.value.length >= 30) {
            setError("Votre pseudo doit faire moins de 30 charactères")
        } else {
            setError("")
        }
    }

    return (
        <Row>
            <Col length={12}>
                <Title type={"h1"} content={"King Of Naheulbeuk"}/>
            </Col>
            <Col length={6}>
                <div className={"form-register"}>
                    <Form titleSubmit={"Me battre"} handleSubmit={handleSubmit}>
                        <InputForm handleChange={(e) => setHero(personages[e.target.value])} type={'select'}
                                   options={personages} label={"Choisissez un personnage"} defaultValue={user.hero}/>
                        <InputForm handleChange={handleChange}
                                   label={'Choisissez un pseudo'}
                                   type={'text'}/>
                        {error && <p style={{color: "red", textAlign: "center"}}>{error}</p>}
                    </Form>
                </div>
            </Col>
        </Row>
    )
}