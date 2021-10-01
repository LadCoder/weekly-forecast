import React from 'react'
import styles from './NavbarComponent.module.css'
import logo from '../../assets/logo.svg'
import { Navbar } from 'react-bootstrap'
import { LocationForm } from '../Location/LocationForm'
import { useWindowSize } from '../../hooks/useWindowSize'

interface Props {
  onSearch: (location: string) => void
}

/**
 * Navigation that sits at the top of the page
 * @return {JSX.Element} A navbar containing branding and the location form
 */
export function NavbarComponent({ onSearch }: Props): JSX.Element {
  const { width } = useWindowSize()

  return (
    <Navbar className={styles.nav} variant="dark">
      <Navbar.Brand className={styles.brand} href="/">
        <img
          alt="logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Weekly Forecast Tracker
      </Navbar.Brand>
      {width >= 768 && <LocationForm onSearch={onSearch} />}
    </Navbar>
  )
}
