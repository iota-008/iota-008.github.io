import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiCssdeck size="3rem" />
            <span style={{ fontSize: "3rem" }}>Ankit Raibole</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/iota-008" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/ankit-raibole/"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.codechef.com/users/i_o_t_a"
          target="_blank"
        >
          <SiCodechef size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
