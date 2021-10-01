import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './CardComponent.module.css'

interface Props {
  children: React.ReactNode
}

/**
 * Displays a card
 * @param {Forecast} children The child components for the card
 * @return {JSX.Element} The styled card component
 */
export function CardComponent({ children }: Props): JSX.Element {
  return <Card className={styles.wrapper}>{children}</Card>
}
