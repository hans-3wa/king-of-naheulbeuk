import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Row} from "../../common/row/row";
import {Col} from "../../common/col/col";
import {Title} from "../../components/title/Title";
import {useNavigate} from "react-router-dom";
import './styles.scss'
import {ListPlayer} from "./ListPlayer";
import {UpdateHeroState} from "./UpdateHeroState";

export const Rules = () => {

    const {user, hero} = useSelector(state => state)
    const navigate = useNavigate()
    useEffect(() => {
        if (user.hero.pseudo === undefined) {
            navigate('/')
        }
    }, [navigate, user])



    return (
        <>
            <div className="rules show">
                <Row>
                    <Col length={12}>
                        <Title type={"h1"} content={`Bonjour à toi ${user.hero.pseudo}`}/>
                    </Col>
                </Row>
                <ListPlayer hero={hero} user={user}/>
                <UpdateHeroState user={user}/>
            </div>

        </>
    )
}