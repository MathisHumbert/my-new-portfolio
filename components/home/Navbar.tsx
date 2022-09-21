import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function Navbar() {
  const { locale } = useRouter();

  return (
    <Wrapper id='intro'>
      <h4>
        <Link href='/' locale='fr'>
          <a>
            <span className={locale === 'fr' ? 'active lg' : 'lg'}>fr</span>
          </a>
        </Link>
        <span> / </span>
        <Link href='/en' locale='en'>
          <a>
            <span className={locale === 'en' ? 'active lg' : 'lg'}>en</span>
          </a>
        </Link>
      </h4>
      <a
        href='https://twitter.com/Mathis1Humbert'
        target='_blank'
        rel='noreferrer'
      >
        mathis humbert
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 25px 5vw;
  text-transform: uppercase;

  h4,
  a {
    font-family: var(--font-bai);
    font-weight: 600;
    font-size: 20px;
    color: var(--dark-color-4);
    text-decoration: none;
  }

  .lg {
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  @media (min-width: 1000px) {
    padding: 50px 5vw;

    h4,
    a {
      font-size: 24px;
    }
  }
`;
