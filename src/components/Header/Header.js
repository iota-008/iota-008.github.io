import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { DiCssdeck } from "react-icons/di";
import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	HashNavLink,
	SocialIcons,
} from "./HeaderStyles";

const Header = () => (
	<div>
		<Container>
			<Div1>
				<NavLink href='/' style={{ display: "flex", alignItems: "center", color: "white" }}>
					<DiCssdeck size='3rem' />
					<span style={{ fontSize: "3rem" }}>Ankit Raibole</span>
				</NavLink>
			</Div1>
			<Div2>
				<li>
					<HashNavLink href='#projects'>Projects</HashNavLink>
				</li>
				<li>
					<HashNavLink href='#tech'>Technologies</HashNavLink>
				</li>
				<li>
					<HashNavLink href='#about'>About</HashNavLink>
				</li>
			</Div2>
			<Div3>
				<SocialIcons
					aria-label='linkedIn'
					href='https://www.linkedin.com/in/ankit-raibole/'
					target='_blank'
				>
					<AiFillLinkedin size='3rem' />
				</SocialIcons>
				<SocialIcons
					aria-label='github'
					href='https://github.com/iota-008'
					target='_blank'
				>
					<AiFillGithub size='3rem' />
				</SocialIcons>

				<SocialIcons
					aria-label='Leetcode'
					href='https://leetcode.com/iota008/'
					target='_blank'
				>
					<SiLeetcode size='3rem' />
				</SocialIcons>
				<SocialIcons
					aria-label='CodeChef'
					href='https://www.codechef.com/users/i_o_t_a'
					target='_blank'
				>
					<SiCodechef size='3rem' />
				</SocialIcons>
			</Div3>
		</Container>
	</div>
);

export default Header;

