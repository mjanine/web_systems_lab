import React from 'react';

export default function Header({ name, title, summary }) {
  return (
    <header style={styles.header}>
      <div style={styles.avatar}>
        {name
          .split(' ')
          .map((n) => n[0])
          .join('')}
      </div>
      <div style={styles.info}>
        <h1 style={styles.name}>{name}</h1>
        <p style={styles.title}>{title}</p>
        {summary && <p style={styles.summary}>{summary}</p>}
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.25rem',
    padding: '1.5rem 0',
    marginBottom: '1rem',
  },
  avatar: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    backgroundColor: '#090D16',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.1rem',
    fontWeight: '700',
    letterSpacing: '1px',
    flexShrink: 0,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    margin: 0,
    fontSize: '1.75rem',
    fontWeight: '800',
    color: '#090D16',
    letterSpacing: '-0.02em',
  },
  title: {
    margin: '0.2rem 0 0 0',
    fontSize: '1rem',
    color: '#374151',
    fontWeight: '600',
  },
  summary: {
    margin: '0.5rem 0 0 0',
    fontSize: '0.925rem',
    color: '#4B5563',
    lineHeight: '1.5',
    maxWidth: '680px',
  },
};