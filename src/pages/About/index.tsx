
const About = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0.5rem', gap: '1rem' }}> 
            <h1>CleanDiscard - Sobre</h1>
            <p>Bem-vindo ao <b>CleanDiscard</b>, a sua solução sustentável para o descarte responsável de pilhas e baterias. Estamos comprometidos em facilitar o acesso a pontos de descarte adequados, promovendo a preservação do meio ambiente e a conscientização sobre a importância do descarte responsável de resíduos tóxicos.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', width: '100%' }}>
                <h2>Missão</h2>
                <p>Promover a consciência ambiental e facilitar o descarte seguro de pilhas e baterias, contribuindo para a preservação do meio ambiente e para um futuro mais sustentável.</p>

                <h2>Objetivos</h2>
                <ul>
                    <li>Fornecer um mapa interativo com pontos de descarte de pilhas e baterias em sua região.</li>
                    <li>Educar os usuários sobre os perigos ambientais associados ao descarte inadequado de resíduos tóxicos.</li>
                    <li>Incentivar práticas de consumo responsável e reciclagem de produtos eletrônicos.</li>
                </ul>

                <h2>Recursos Principais</h2>
                <ul>
                    <li><b>Mapa Interativo:</b> Explore pontos de descarte próximos, visualizando informações detalhadas sobre cada local, como tipos de resíduos aceitos e direções para chegar lá.</li>
                    <li><b>Dicas Ambientais:</b> Acesse recursos educacionais e dicas sobre como reduzir seu impacto ambiental, escolher produtos mais sustentáveis e realizar o descarte adequado.</li>
                    <li><b>Chatbot Inteligente:</b> Receba respostas rápidas para suas dúvidas sobre descarte de resíduos e uso do sistema.</li>
                </ul>

                <h2>Junte-se a nós!</h2>
            </div>
        </div>
    )
};

export default About;