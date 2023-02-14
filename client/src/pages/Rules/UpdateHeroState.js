import {Row} from "../../common/row/row";
import {Col} from "../../common/col/col";
import {Box} from "../../components/box/Box";
import {Title} from "../../components/title/Title";
import {useDispatch} from "react-redux";
import {updateStatHero} from "../../store/slices/user/userSlice";
import {useEffect, useState} from "react";
import {Form} from "../../components/form/Form";
import {updatePage} from "../../store/slices/game/game";
import {useNavigate} from "react-router-dom";
import {ButtonPrimary} from "../../components/buttons/buttonPrimary";
import {ButtonSecondary} from "../../components/buttons/buttonSecondary";
import {personages} from "../../data/personages";
import {logDOM} from "@testing-library/react";

export const UpdateHeroState = ({user}) => {

    const [ptsValue, setPtsValue] = useState(30)
    const [defaultHero, setDefaultHero] = useState(...personages.filter(e => e.id === user.hero.id))


    const [shield, setShield] = useState({
        speed: user.hero.shield.speed,
        strength: user.hero.shield.strength,
        magic: user.hero.shield.magic,
    })

    const [attack, setAttack] = useState({
        speed: user.hero.attack.speed,
        strength: user.hero.attack.strength,
        magic: user.hero.attack.magic
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateStatHero({shield, attack}))
        dispatch(updatePage('tournament'))
        navigate('/tournament')

    }

    const handleChangeShield = (e) => {
        const {name, value} = e.target
        if (shield[name] < value && defaultHero.shield[name] < value) {
            setPtsValue(ptsValue - 10)
            setShield({...shield, [name]: Number(value)})
        }
    }

    const handleChangeAttack = (e) => {
        const {name, value} = e.target

        if (attack[name] < value && defaultHero.attack[name] < value) {
            setPtsValue(ptsValue - 10)
            setAttack({...attack, [name]: Number(value)})
        }
    }

    const handleReinitialize = () => {
        setPtsValue(30)
        setAttack({...defaultHero.attack})
        setShield({...defaultHero.shield})
    }

    return (
        <Row>
            <Col length={6}>
                <Box>
                    <Title type={"h2"} content={`Modifier vos stats. Encore ${ptsValue}`}/>
                    <Form handleSubmit={handleSubmit} titleSubmit={"Valider vos stats"} btnSubmit={false}>
                        <Row>
                            <Col length={6}>
                                <div className="shield-form">
                                    <Title type={"h3"} content={"Stats de défense"}/>
                                    {Object.entries(shield).map(([property, v], i) => {
                                        return (
                                            <div key={i}>
                                                <input onChange={handleChangeShield} type="range"
                                                       id={property}
                                                       name={property}
                                                       disabled={ptsValue <= 0}
                                                       min="0" max="100" step={"10"} value={shield[property]}/>
                                                <label form={property}>{property} {shield[property]}</label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </Col>
                            <Col length={6}>
                                <div className="shield-form">
                                    <Title type={"h3"} content={"Stats de d'attaque"}/>
                                    {Object.entries(attack).map(([k, v], i) => {
                                        return (
                                            <div key={i}>
                                                <input onChange={handleChangeAttack} type="range"
                                                       id={k}
                                                       name={k}
                                                       disabled={ptsValue <= 0}
                                                       min="0" max="100" step={"10"} value={attack[k]}/>
                                                <label form={k}>{k} {attack[k]}</label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </Col>
                            <Row>
                                <Col length={12}>
                                    <ButtonPrimary content={"Valider vos stats"} handleClick={() => console.log('ok')}/>
                                    <ButtonSecondary type={"button"} content={"Réinitialiser"}
                                                     handleClick={handleReinitialize}/>
                                </Col>
                            </Row>
                        </Row>
                    </Form>
                </Box>
            </Col>
        </Row>
    )
}