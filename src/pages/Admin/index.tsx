import { Link } from "react-router-dom";

import Container from "../../components/Container";
import Wastes from "./Wastes";

const Admin = () => {

    const links = [
        {
            name: 'Resíduos',
            path: '/admin/wastes'
        },
        {
            name: 'Locais',
            path: '/admin/points'
        },
        {
            name: 'Usuários',
            path: '/admin/users'
        },
        {
            name: 'Avaliações',
            path: '/admin/evaluations'
        }

    ]

    return (
        <Container $width="100%" $height="100%" $padding="0.3rem" $gap="0.5rem" $direction="column" $align="center" $justify="center">
            <Container $width="100%" $height="20rem" $border="2px solid #008000" $radius="0.5rem" $gap="0.5rem" $padding="0.5rem" $overflowX="auto" $justify="flex-start">
                { links.map((item, index) => {
                    return (
                        <Link key={index} to={item.path}>
                            {item.name}
                        </Link>
                    );
                })}
            </Container>
        </Container>
    );

};


export { Wastes, Admin };