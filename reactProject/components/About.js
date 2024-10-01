import styled from "styled-components";
import imageAboutBackground from "../images/about-background.jpeg";

const AboutContainer = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${imageAboutBackground}), linear-gradient(#fdfdfd, #fdfdfd);
    background-repeat: no-repeat;
    background-size: 60%;
    overflow: hidden;
    padding: 100px 0;
`


const InnerSection = styled.div`
    width: 55%;
    float: right; 
    background-color: #fdfdfd;
    padding: 110px;
    box-shadow: 10px 10px 8px rgba(0,0,0,0.3);
`;

const InnerH1 = styled.h1`
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 900;
`; 

const Text = styled.p`
    font-size: 13px;
    color: #545454;
    line-height: 30px;
    text-align: justify;
    margin-bottom: 40px;
`
const Skills = styled.div`

`


const Button = styled.button`
    font-size: 22px;
    text-align: center;
    letter-spacing: 2px;
    border: none;
    border-radius: 20px;
    padding: 8px;
    width: 200px;
    background-color: #00999c;
    color: white;
    cursor: pointer;
    

    &:hover {
    
        background-color: black;
        color: #00999c;
    }
`;

function About() {
    return (
        <AboutContainer>
            <InnerSection>
                <InnerH1>Sobre Nós</InnerH1>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus repellendus corporis, omnis tempora tenetur impedit nam 
                    dolore explicabo obcaecati porro, facilis et dolorem esse architecto 
                    provident natus quo harum beatae.
                </Text>
                <Skills>
                    <Button>Botão1</Button>
                    <Button>Botão2</Button>
                </Skills>
            </InnerSection>
        </AboutContainer>
    );
}

export default About;