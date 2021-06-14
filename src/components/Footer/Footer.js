import React, { useEffect, useRef } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  //Get the button
  const scrollToTopButtonRef = useRef(null);
  // var scrollToTopButton = document.getElementById("myBtn");
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopButtonRef.current.style.display = "block";
    } else {
      scrollToTopButtonRef.current.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  useEffect(() => {
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  return (
    <FooterWrapper>
      <button
        onClick={topFunction}
        id="scrollToTopButton"
        title="Go to top"
        ref={scrollToTopButtonRef}
      >
        <AiOutlineArrowUp size="3rem" />
      </button>

      <LinkList>
        <LinkColumn>
          <LinkTitle>Resume</LinkTitle>
          <LinkItem
            href="https://drive.google.com/file/d/1lJDkLwGWesy1WnGVM7MSWhIcxYUdV9jH/view?usp=sharing"
            target="_blank"
          >
            Resume
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:raiboleankit8@gmail.com">
            raiboleankit8@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>call</LinkTitle>
          <LinkItem href="tel:+91996-042-6182">996-042-6182</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Keep Learning keep growing</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            ariaLabel="linkedIn"
            href="https://www.linkedin.com/in/ankit-raibole/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            ariaLabel="github"
            href="https://github.com/iota-008"
            target="_blank"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons
            ariaLabel="CodeChef"
            href="https://www.codechef.com/users/i_o_t_a"
            target="_blank"
          >
            <SiCodechef size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
