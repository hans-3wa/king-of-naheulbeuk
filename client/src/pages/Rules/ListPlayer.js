import {Row} from "../../common/row/row";
import {Col} from "../../common/col/col";
import {Box} from "../../components/box/Box";

export const ListPlayer = ({hero, user}) => {
    return (
        <Row>
            <Col length={6}>
                <Box>
                    <p>Vous allez vous combattre contre plusieurs joueurs ! Les voicis</p>
                    <ul>
                        {hero.heros.map((e, i) => {
                            if (e.id !== user.hero.id) {
                                return <li key={i}><span
                                    style={{color: 'red', fontWeight: '900'}}>{e.pseudo}</span> {e.breed} </li>
                            }
                        })}
                    </ul>
                </Box>
            </Col>
        </Row>
    )
}