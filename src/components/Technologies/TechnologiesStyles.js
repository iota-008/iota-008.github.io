import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin: 2.4rem 0 1.2rem;

  @media ${props => props.theme.breakpoints.lg}{
    margin: 36px 0 8px;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 28px 0 8px;
    gap: 16px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    grid-template-columns: 1fr;
    margin: 20px 0 8px;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media ${props => props.theme.breakpoints.sm}{
    margin-left: 0;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 0;

@media ${props => props.theme.breakpoints.md}{
  font-size: 22px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
}
`

export const ListParagraph = styled.p`
  font-size: 16px;
  line-height: 28px;
  word-spacing: 1px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 15px;
    line-height: 24px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.2rem;
  background: rgba(33, 45, 69, 0.32);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 1.4rem;
  min-height: 150px;
  box-sizing: border-box;

@media ${props => props.theme.breakpoints.md}{
  min-height: 140px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 0;
  max-width: 100%;
  flex-direction: row;
  min-height: auto;
}
`

export const TechIconWrap = styled.div`
  width: 44px;
  min-width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #13adc7;
  background: rgba(19, 173, 199, 0.12);

  @media ${props => props.theme.breakpoints.sm}{
    width: 38px;
    min-width: 38px;
    height: 38px;
  }
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
