import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { DiCssdeck } from "react-icons/di";
import {
	Container,
	Div1,
	Div2,
	Div3,
	HeaderMeta,
	NavLink,
	HashNavLink,
	SocialIcons,
	SocialRow,
} from "./HeaderStyles";

const Header = () => (
	<div>
		<Container>
			<Div1>
				<NavLink href='/' style={{ display: "flex", alignItems: "center", color: "white" }}>
					<DiCssdeck size='2.4rem' />
					<span style={{ fontSize: "2.1rem", marginLeft: "0.6rem" }}>Ankit Raibole</span>
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
				<HeaderMeta>Updated Apr 2026</HeaderMeta>
				<SocialRow>
					<SocialIcons
						aria-label='linkedIn'
						href='https://www.linkedin.com/in/ankit-raibole/'
						target='_blank'
					>
						<AiFillLinkedin size='2.4rem' />
					</SocialIcons>
					<SocialIcons
						aria-label='github'
						href='https://github.com/iota-008'
						target='_blank'
					>
						<AiFillGithub size='2.4rem' />
					</SocialIcons>

					<SocialIcons
						aria-label='Leetcode'
						href='https://leetcode.com/iota008/'
						target='_blank'
					>
						<SiLeetcode size='2.4rem' />
					</SocialIcons>
					<SocialIcons
						aria-label='CodeChef'
						href='https://www.codechef.com/users/i_o_t_a'
						target='_blank'
					>
						<SiCodechef size='2.4rem' />
					</SocialIcons>
				</SocialRow>
			</Div3>
		</Container>
	</div>
);

export default Header;

