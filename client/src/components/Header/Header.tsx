import React from 'react'
import styles from './Header.module.css'

interface Props {
  title: string
}

/**
 * Page Header
 * @param {string} title The text to be displayed within the header
 * @return {JSX.Element} The Page header
 */
export default function Header({ title }: Props): JSX.Element {
  return <h1 className={styles.heading}>{title}</h1>
}
