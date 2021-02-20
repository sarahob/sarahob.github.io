import { useState } from "react";
import styled from "styled-components";

import SceneImage from "../components/SceneImage";
import { useThemeContext } from "../context/ThemeContext";
import { ThemeWrapper } from "../context/ThemeContext";

const Layout = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: grid;
  grid-template-rows: 80px auto auto;
  grid-template-columns: 25% auto 25%;
  grid-gap: 10px;
  transition: background 250ms linear;

  @media (max-width: 550px) {
    grid-template-columns: 10% auto 10%;
    grid-gap: 5px;
    height: auto;
  }
`;

const Social = styled.div`
  grid-row: 1;
  grid-column: 1;
  width: 100%;
  height: auto;
  align-self: center;

  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    color: ${(props) => props.theme.primary};
    font-size: 1.3rem;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 1250px) {
    grid-column: 1 / span 3;
    margin-top: 80px;
  }
`;

const SwitchContainer = styled.div`
  grid-row: 1;
  grid-column: 3;
  width: 100%;
  align-self: center;
`;

const Switch = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 3px;
  display: inline-grid;
  grid-columns: auto 20px auto;
  margin-left: 75%;
  cursor: pointer;

  :hover > div {
    border-width: 3px;
  }

  @media (max-width: 1250px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 550px) {
    margin-left: -18px;
  }
`;

const SwitchOuter = styled.div`
  width: 20px;
  height: 40px;
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 3px;
  grid-column: 2;
  margin-top: 8px;

  @media (max-width: 1250px) {
    width: 10px;
    height: 20px;
  }
`;

const SwitchInner = styled.div`
  width: 12px;
  height: 25px;
  border-top: 2px solid
    ${(props) =>
      props.theme.primary === "#f2f2f2" ? props.theme.primary : "transparent"};
  border-bottom: 2px solid
    ${(props) =>
      props.theme.primary === "#f2f2f2" ? "transparent" : props.theme.primary};
  margin: 5px auto 5px auto;
  transition: all 250ms linear;

  @media (max-width: 1250px) {
    width: 4px;
    height: 10px;
  }
`;

const Scene = styled.div`
  grid-row: 1 / span 2;
  grid-column: 2;
  width: 100%;
  height: 100%;
  justify-self: center;

  @media (max-width: 1250px) {
    padding-top: 100px;
  }
`;

const Info = styled.div`
  grid-row: 3;
  grid-column: 2;
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  margin: 20px auto;
  width: 80%;
  height: 80px;
  background: #332f49;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1650px) {
    font-size: 14px;
  }

  @media (max-width: 1445px) {
    font-size: 12px;
  }

  @media (max-width: 1250px) {
    height: 160px;
  }
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 3.8em;
  text-align: center;
  color: ${(props) => props.theme.tertriary};
  margin: 0px;
  padding: 0px;
`;

const TextContainer = styled.div`
  width: 80%;
  margin: 0px auto;
  font-size: 16px;

  @media (max-width: 1650px) {
    font-size: 14px;
  }
`;

const Text = styled.p`
  font-size: 2em;
  text-align: center;
  color: ${(props) => props.theme.primary};
`;

export default function Home() {
  const [themeValue, setThemeValue] = useState("light");
  const theme = useThemeContext();

  const switchTheme = () => {
    if (themeValue === "light") {
      setThemeValue("dark");
    } else {
      setThemeValue("light");
    }
  };

  return (
    <ThemeWrapper value={themeValue}>
      <Layout theme={theme[themeValue]}>
        <Social theme={theme[themeValue]}>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/sarah-o-brien-50752086/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/sarocodes" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/sarahob" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://dev.to/sarahob" target="_blank">
                Blog
              </a>
            </li>
          </ul>
        </Social>
        <SwitchContainer onClick={switchTheme}>
          <Switch theme={theme[themeValue]}>
            <SwitchOuter theme={theme[themeValue]}>
              <SwitchInner theme={theme[themeValue]}></SwitchInner>
            </SwitchOuter>
          </Switch>
        </SwitchContainer>
        <Scene>
          <SceneImage />
        </Scene>
        <Info>
          <TitleContainer>
            <Title theme={theme[themeValue]}>Fullstack Web Engineer</Title>
          </TitleContainer>
          <TextContainer>
            <Text theme={theme[themeValue]}>Hi, I'm Sarah.</Text>
            <Text theme={theme[themeValue]}>
              I love solving problems with code and turning designs into
              experiences.
            </Text>
            <Text theme={theme[themeValue]}>
              I'm passionate about the web, data visualization and UX.
            </Text>
          </TextContainer>
        </Info>
      </Layout>
    </ThemeWrapper>
  );
}
